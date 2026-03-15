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
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-[family-name:var(--font-geist)]">
        {/* Nav */}
        <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="text-base font-semibold tracking-tight">Forin</span>
              <span className="hidden text-xs text-slate-400 sm:block">
                Japan Foreign Index
              </span>
            </Link>
            <nav className="flex gap-5 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                About
              </Link>
              <Link href="/data" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Data
              </Link>
              <Link
                href="/surveys"
                className="rounded-full bg-slate-900 dark:bg-slate-100 px-3 py-1 text-xs text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
              >
                Surveys
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-20">
          <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Forin / Japan Foreign Index. Data is
              aggregated and anonymized — no individual responses are published.
            </p>
            <Link href="/surveys" className="underline hover:text-slate-600 dark:hover:text-slate-300">
              Surveys
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
