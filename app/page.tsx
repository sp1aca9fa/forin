import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-4">
            Japan Foreign Index
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-6">
            Real data on life as a foreigner in Japan
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Community-contributed surveys combined with government statistics — giving
            you an honest picture of employment, salary, and daily life that official
            sources can&apos;t provide.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-slate-700 transition-colors"
            >
              Share your experience
            </a>
            <Link
              href="/data"
              className="rounded-full border border-slate-300 dark:border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-500 dark:hover:border-slate-400 transition-colors"
            >
              View the data
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              The data gap
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Japan publishes excellent macro statistics on foreign residents — visa
              categories, nationality breakdowns, regional distribution. What it
              doesn&apos;t publish is what it&apos;s actually like to live here.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              What&apos;s a realistic salary for a foreigner in tech? How long does
              it take to feel settled? How much does Japanese ability actually matter
              for your career? These questions get answered in expat forums and
              Discord servers — one anecdote at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "3.8M+", label: "Foreign residents in Japan" },
              { stat: "~0", label: "Public salary datasets by visa type" },
              { stat: "10+", label: "Years of government data available" },
              { stat: "—", label: "Individual experience data" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4"
              >
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">What this becomes</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Salary benchmarking",
              body: "Know what people like you actually earn — filtered by visa, industry, Japanese level, and years of experience.",
            },
            {
              title: "Cross-referenced with government data",
              body: "Survey responses sit alongside e-Stat population data and MHLW wage surveys so you can see where community experience diverges from official numbers.",
            },
            {
              title: "Living as a dataset",
              body: "Housing costs, commute times, satisfaction scores, job search timelines — the things that matter to your daily life, measured.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">About</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Forin is an independent project built by a foreign resident in Tokyo.
            It started as a side project to answer the questions I couldn&apos;t find
            reliable answers to when I first arrived — and grew into something I
            thought other people might find useful.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The platform is early. The survey has a handful of responses. The data
            visualizations are basic. But the goal is to build something rigorous
            enough that researchers, HR professionals, and policymakers eventually
            find it worth citing — while keeping it useful for individuals making
            real life decisions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="rounded-2xl bg-slate-900 text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Help build the dataset</h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
              The survey takes about 5 minutes. All questions are optional beyond the
              basics. Your response is anonymous — collected through Google Forms so
              you know exactly who holds your data.
            </p>
          </div>
          <a
            href="https://forms.gle/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Take the survey →
          </a>
        </div>
      </section>
    </div>
  );
}
