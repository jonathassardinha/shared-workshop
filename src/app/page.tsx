import { Sandbox } from "./Sandbox";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      <div className="container grid grow grid-cols-1 gap-4 p-4">
        <Sandbox />
        {/* <MonacoEditor /> */}
        {/* <div className="bg-zinc-900">preview</div> */}
      </div>
    </main>
  );
}
