import Chat from "@/components/shared/Chat";

export default function AiPage() {
  return (
    <div className="flex h-full bg-gray-100">
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="size-full max-w-3xl">
          <Chat />
        </div>
      </main>
    </div>
  );
}
