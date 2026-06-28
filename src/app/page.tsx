import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-xl font-bold">MyApp</h1>
        <nav className="flex gap-4">
          <a href="#" className="text-sm hover:underline">Home</a>
          <a href="#" className="text-sm hover:underline">About</a>
          <a href="#" className="text-sm hover:underline">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyApp</h2>
        <p className="text-gray-500 max-w-md">
          This is the starting point of our production-ready Next.js application.
        </p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-400 border-t">
        © 2026 MyApp. All rights reserved.
      </footer>
    </main>
  );
}
