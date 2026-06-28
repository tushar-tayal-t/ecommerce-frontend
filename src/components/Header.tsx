import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 border-b">
            <h1 className="text-xl font-bold">MyApp</h1>
            <nav className="flex gap-4">
                <Link href="/" className="text-sm hover:underline">Home</Link>
                <Link href="/about" className="text-sm hover:underline">About</Link>
                <Link href="#" className="text-sm hover:underline">Contact</Link>
            </nav>
        </header>
    );
}