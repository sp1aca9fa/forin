import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-4">
          About
        </p>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
          We&apos;re building the data layer for Japan&apos;s foreign resident
          population.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Forin — the Japan Foreign Index — is an independent data
          platform collecting and publishing structured information on foreign
          residents in Japan. The data that businesses need and individuals
          deserve.
        </p>
      </div>

      {/* The problem */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          The problem
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Many foreigners do not feel represented by brands or Companies
              even after years of living in Japan.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              And yet, Japan is at big demographic turning point: native
              population has is decreasing significantly in recent years, whilst
              foreigners are growing in presence to supply work force demands.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "~4M", label: "Foreign residents in Japan" },
              { stat: "10.5%", label: "Year-on-year growth in 2024" },
              { stat: "11M", label: "Projected worker shortage by 2040" },
              { stat: "900K", label: "Japanese nationals lost in 2024" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4"
              >
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {stat}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our mission
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              To collect high-quality, structured data on foreign residents in
              Japan through surveys, public data sources, and other means —
              and to turn that data into meaningful analysis and insights that
              are openly accessible.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We combine community-contributed survey data with government
              statistics to build a picture that neither source can provide
              alone: the lived experience of Japan&apos;s foreign population,
              measured and verified.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our vision
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              A Japan where companies, employers, and institutions are genuinely
              equipped to serve their foreign residents — because they finally
              have the data to do so.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              HR departments that hire and retain international talent
              effectively. Real estate platforms that understand what foreign
              renters actually need. Financial services built for people who
              weren&apos;t born in Japan. Policymakers designing integration
              programs based on evidence, not assumption. That&apos;s where
              this data leads.
            </p>
          </div>
        </div>
      </section>

      {/* The name */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              The name
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              <strong className="text-slate-800 dark:text-slate-200">Forin</strong> comes from
              the initials of{" "}
              <strong className="text-slate-800 dark:text-slate-200">
                For
              </strong>
              eign{" "}
              <strong className="text-slate-800 dark:text-slate-200">In</strong>
              dex. It also turns out to be the original Middle
              English spelling of the word, which we enjoy.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The professional brand is{" "}
              <strong className="text-slate-800 dark:text-slate-200">
                Japan Foreign Index
              </strong>{" "}
              (JFI) — the name we use on reports, data publications, and
              conversations with businesses. Forin is the community-facing side:
              the platform, the surveys, the place where data actually lives.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-1">
                Community brand
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Forin
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                forin.me — the platform, the surveys, the data
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-1">
                Professional brand
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Japan Foreign Index
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                JFI — reports, publications, business clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who's behind it */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Who&apos;s behind this
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Forin is built by a foreign resident in Tokyo. The project started
            as a personal problem: the data I wanted when I was making career
            and life decisions in Japan simply didn&apos;t exist in any
            structured form. Salaries, hiring timelines, whether Japanese
            ability actually mattered — all of it lived in forum posts and
            secondhand stories.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            The hypothesis is that enough people have this problem that building
            a real data resource around it is worth doing — and that the data
            becomes more valuable as it grows. Early responses are useful.
            Hundreds of responses become a benchmark. Thousands become a
            reference that researchers, HR teams, and policymakers actually
            cite.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The project is early. The survey has a handful of responses. But
            the goal is something rigorous and lasting — not another expat blog.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="rounded-2xl bg-slate-900 dark:bg-slate-800 text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Help build the dataset</h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
              Every response makes the data more meaningful. The survey takes
              about 5 minutes and is fully anonymous — collected through Google
              Forms so you know exactly who holds your data.
            </p>
          </div>
          <Link
            href="/surveys"
            className="shrink-0 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
          >
            See our surveys →
          </Link>
        </div>
      </section>
    </div>
  );
}
