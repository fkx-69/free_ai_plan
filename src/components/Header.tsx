import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 px-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AI Services
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
