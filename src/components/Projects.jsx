const projects = [
  {
    title: 'BeFit - Gym Website',
    href: 'https://github.com/umeshraj676u',
    image: '/images/befit-mern.png',
    description:
      'Full-stack MERN gym management app with member records, workout plans, class scheduling, and payments.',
  },
  {
    title: 'Virtual Assistant (JARVIS)',
    href: 'https://github.com/umeshraj676u',
    image: '/images/virtual-assistant.png',
    description:
      'AI-based desktop virtual assistant using Python, SpeechRecognition, pyttsx3, React, and OpenAI API.',
  },
  {
    title: 'LeetCode Problem Solving',
    href: 'https://leetcode.com/u/G48KesVED9/',
    image: '/images/proj_3.jpg',
    description:
      'Consistent algorithm practice across data structures and algorithms.',
  },
  {
    title: 'CodeChef Competitive Programming',
    href: 'https://www.codechef.com/users/umeshkumar123',
    image: '/images/proj_4.jpg',
    description:
      'Active participant with 309 problems solved and consistent streaks.',
  },
  {
    title: 'Smart India Hackathon 2024',
    href: 'https://github.com/umeshraj676u',
    image: '/images/proj_5.jpg',
    description:
      'Participated in SIH 2024 working on AYUSH startup registration portal.',
  },
]

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-300/90">{project.description}</p>
      </div>
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide text-amber-300/90">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Things I&apos;ve built
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300/90">
          Below are some of my web development and software engineering projects.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-2xl font-semibold">
          More projects on <span className="text-amber-300">GitHub</span>
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">
          I love building innovative solutions and solving complex programming
          challenges.
        </p>
        <div className="mt-6">
          <a
            href="https://github.com/umeshraj676u"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

