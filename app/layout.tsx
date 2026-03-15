import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Forin — Japan Foreign Index",
  description:
    "Community data on foreign residents in Japan: employment, salary, and daily life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased font-[family-name:var(--font-geist)]">
        {/* Nav */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="text-base font-semibold tracking-tight">Forin</span>
              <span className="hidden text-xs text-slate-400 sm:block">
                Japan Foreign Index
              </span>
            </Link>
            <nav className="flex gap-5 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900 transition-colors">
                About
              </Link>
              <Link href="/data" className="hover:text-slate-900 transition-colors">
                Data
              </Link>
              <a
                href="https://forms.gle/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white hover:bg-slate-700 transition-colors"
              >
                Take the survey
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white mt-20">
          <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Forin / Japan Foreign Index. Data is
              aggregated and anonymized — no individual responses are published.
            </p>
            <a
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-600"
            >
              Take the survey
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
