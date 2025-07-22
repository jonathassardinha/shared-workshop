import { MonacoEditor } from "./MonacoEditor";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex grow flex-col items-center justify-center gap-12 px-4 py-16">
        <MonacoEditor />
      </div>
    </main>
  );
}
