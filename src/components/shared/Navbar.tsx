import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <Link href="/" className="font-bold">MyApp</Link>
      <div className="flex gap-4">
        <Link href="/" className="text-sm hover:underline">Home</Link>
        <Link href="/posts" className="text-sm hover:underline">Posts</Link>
      </div>
    </nav>
  );
}