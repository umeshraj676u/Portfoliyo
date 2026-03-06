const experience = [
  {
    date: 'Dec 2024 – Jan 2025',
    title: 'Frontend Developer Intern',
    org: 'Sundown Studio',
    bullets: [
      'Developed and styled UI using HTML, CSS, JavaScript, and Bootstrap.',
      'Created responsive layouts ensuring cross-device performance.',
      'Collaborated with design team to translate Figma into components.',
    ],
  },
  {
    date: '2022 – 2026',
    title: 'Student',
    org: 'Technocrats Institute of Technology',
    bullets: [
      'Maintaining 7.71 CGPA while participating in coding competitions.',
      'Participated in Smart India Hackathon 2024 (AYUSH portal problem).',
      'Active on LeetCode/CodeChef with consistent learning streaks.',
    ],
  },
]

const education = [
  {
    date: '2022 – 2026',
    title: "Bachelor's of Technology (CSE-AIML)",
    org: 'Technocrats Institute of Technology',
    detail: 'Grade: 7.71 CGPA (Pursuing)',
  },
  {
    date: '2020 – 2022',
    title: 'Higher Secondary',
    org: 'Model School',
    detail: 'Grade: 85%',
  },
]

function Card({ children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      {children}
    </div>
  )
}

export function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide text-amber-300/90">
          Resume
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Experience &amp; Education
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300/90">
          Enthusiastic software engineer with a strong foundation in web
          development and problem-solving.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experience.map((e) => (
          <Card key={e.title}>
            <p className="text-sm text-slate-400">{e.date}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{e.title}</h3>
            <p className="text-sm text-slate-300">{e.org}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300/90">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold">Education</h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {education.map((ed) => (
            <Card key={ed.title}>
              <p className="text-sm text-slate-400">{ed.date}</p>
              <h4 className="mt-2 text-lg font-semibold text-white">
                {ed.title}
              </h4>
              <p className="text-sm text-slate-300">{ed.org}</p>
              <p className="mt-3 text-sm text-slate-300/90">{ed.detail}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/umesh-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

