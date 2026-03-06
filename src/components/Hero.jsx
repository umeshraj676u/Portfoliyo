import { useEffect, useMemo, useState } from 'react'

function useTypeCycle(texts, { typeMs = 80, pauseMs = 1100 } = {}) {
  const safeTexts = useMemo(
    () => (Array.isArray(texts) && texts.length ? texts : ['Developer']),
    [texts],
  )

  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const current = safeTexts[textIndex]

    if (phase === 'typing') {
      if (charIndex >= current.length) {
        const t = setTimeout(() => setPhase('pausing'), pauseMs)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setCharIndex((v) => v + 1), typeMs)
      return () => clearTimeout(t)
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), Math.max(300, pauseMs / 2))
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (charIndex <= 0) {
        setPhase('typing')
        setTextIndex((i) => (i + 1) % safeTexts.length)
        return undefined
      }
      const t = setTimeout(() => setCharIndex((v) => v - 1), Math.max(30, typeMs / 2))
      return () => clearTimeout(t)
    }
  }, [safeTexts, textIndex, charIndex, phase, typeMs, pauseMs])

  const current = safeTexts[textIndex]
  return current.slice(0, charIndex)
}

export function Hero() {
  const typed = useTypeCycle(
    ['Software Engineer', 'Web Developer', 'Problem Solver'],
    { typeMs: 70, pauseMs: 950 },
  )

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_0%,rgba(245,158,11,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_90%_30%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/80" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-amber-300/90">
            Hello!
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            I&apos;m <span className="text-amber-300">Umesh Kumar</span>
          </h1>

          <div className="mt-5 text-xl text-slate-200 md:text-2xl">
            <span className="text-slate-400">I am a </span>
            <span className="font-semibold text-white">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-amber-300 align-middle" />
          </div>

          <p className="mt-5 max-w-xl text-slate-300/90">
            Enthusiastic software engineer with a strong foundation in modern web
            development and problem solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/umeshraj676u"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/G48KesVED9/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              LeetCode
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-400/20 via-transparent to-blue-500/20 blur-2xl" />
          <div className="relative h-72 w-56 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl md:h-96 md:w-72">
            <img
              src="/images/hero.png"
              alt="Profile"
              className="h-full w-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

