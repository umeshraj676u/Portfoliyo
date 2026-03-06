const skills = [
  { name: 'HTML, CSS, JavaScript', level: 90 },
  { name: 'React.js', level: 88 },
  { name: 'Node.js, Express.js', level: 82 },
  { name: 'MongoDB, MySQL', level: 80 },
  { name: 'Java, Python', level: 78 },
  { name: 'Git & GitHub', level: 85 },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex items-start gap-5">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/images/about.png"
                alt="Umesh Kumar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-slate-300">
                <span className="text-slate-400">Name:</span> Umesh Kumar
              </p>
              <p className="text-sm text-slate-300">
                <span className="text-slate-400">Job Role:</span> Software Engineer
              </p>
              <p className="text-sm text-slate-300">
                <span className="text-slate-400">Experience:</span> Fresher
              </p>
              <p className="text-sm text-slate-300">
                <span className="text-slate-400">Address:</span> Bhopal, Madhya Pradesh
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-slate-200">
              Skills
            </h3>
            <div className="mt-4 space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-200">{s.name}</span>
                    <span className="text-slate-400">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-amber-300/90">
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-slate-300/90">
            I am an enthusiastic web and software developer seeking opportunities
            in a collaborative tech environment. With a strong foundation in
            Java, HTML, CSS, and JavaScript, I aim to develop engaging websites
            and reliable applications.
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-slate-400">Profile</dt>
              <dd className="text-slate-200">Software Engineering &amp; Web Dev</dd>
            </div>
            <div>
              <dt className="text-slate-400">Domain</dt>
              <dd className="text-slate-200">Full-Stack, Problem Solving</dd>
            </div>
            <div>
              <dt className="text-slate-400">Education</dt>
              <dd className="text-slate-200">B.Tech (CSE-AIML)</dd>
            </div>
            <div>
              <dt className="text-slate-400">Languages</dt>
              <dd className="text-slate-200">English, Hindi</dd>
            </div>
            <div>
              <dt className="text-slate-400">Tools</dt>
              <dd className="text-slate-200">Git, GitHub, VS Code</dd>
            </div>
            <div>
              <dt className="text-slate-400">Interests</dt>
              <dd className="text-slate-200">CP, Web Dev, Learning</dd>
            </div>
          </dl>

          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/umeshkumar676u/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

