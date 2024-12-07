// /pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from "next";
import Busboy from "busboy";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface UploadedFile {
  name: string;
  path: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const files: UploadedFile[] = [];

  const busboy = Busboy({ headers: req.headers });
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  busboy.on(
    "file",
    (fieldname: string, file: NodeJS.ReadableStream, filename: string) => {
      const fileId = uuidv4();
      const filePath = path.join(uploadDir, fileId + path.extname(filename));
      const fileStream = fs.createWriteStream(filePath);

      file.pipe(fileStream);

      fileStream.on("close", () => {
        files.push({
          name: filename,
          path: `/uploads/${fileId}${path.extname(filename)}`,
        });
      });
    },
  );

  busboy.on("finish", () => {
    res.status(200).json({ files });
  });

  req.pipe(busboy);
}
