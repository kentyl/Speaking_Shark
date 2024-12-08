import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/img/home_page_image.png"
        alt="preview"
        className="absolute left-0 top-0 size-full rounded-lg object-cover"
        priority
        layout="fill"
      />
    </div>
  );
}
