import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4 flex gap-6">
          <Link href="/" className="hover:underline font-semibold">
            🏠 Home
          </Link>
          <Link href="/users" className="hover:underline font-semibold">
            👥 Users
          </Link>
          <Link href="/about" className="hover:underline font-semibold">
            ℹ️ About
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}