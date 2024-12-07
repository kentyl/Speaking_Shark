import Chat from "@/components/shared/Chat";

export default function AiPage() {
  return (
    <div className="flex size-full bg-gray-100">
      <main className="flex flex-1 justify-center overflow-hidden">
        <div className="size-full max-w-3xl">
          <Chat />
        </div>
      </main>
    </div>
  );
}
