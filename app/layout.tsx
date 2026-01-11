import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Biodican",
    template: "%s | Biodican",
  },
  description: "Ciencia, datos e innovación aplicada a biodiversidad y salud.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <header className="border-b">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3 font-semibold">
              <span className="rounded bg-white p-1">
                <img
                  src="/biodican_logo.png"
                  alt="Biodican"
                  width={44}
                  height={44}
                  style={{ display: "block" }}
                />
              </span>
              <span>Biodican</span>
            </Link>

            <div className="flex gap-6 text-sm text-gray-700">
              <Link className="hover:text-black" href="/servicios">
                Servicios
              </Link>
              <Link className="hover:text-black" href="/contacto">
                Contacto
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Biodican
          </div>
        </footer>
      </body>
    </html>
  );
}
