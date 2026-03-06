import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#resume', label: 'Resume', id: 'resume' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 16)

      let currentId = 'home'
      links.forEach((link) => {
        const el = document.getElementById(link.id)
        if (!el) return
        const top = el.offsetTop - 120
        if (y >= top) {
          currentId = link.id
        }
      })
      setActive(currentId)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-white/10 backdrop-blur',
        scrolled ? 'bg-slate-950/70' : 'bg-slate-950/30',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight">
          Umesh Kumar
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const isActive = active === l.id
            return (
              <a
                key={l.href}
                href={l.href}
                className={[
                  'rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-amber-400 text-slate-950'
                    : 'text-slate-200/90 hover:text-white hover:bg-white/5',
                ].join(' ')}
                onClick={() => setActive(l.id)}
              >
                {l.label}
              </a>
            )
          })}
          <a
            href="https://github.com/umeshraj676u"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-slate-50 hover:bg-white/10"
          >
            GitHub
          </a>
        </nav>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={[
                    'rounded-lg px-3 py-2 text-sm',
                    isActive
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-200/90 hover:bg-white/5 hover:text-white',
                  ].join(' ')}
                  onClick={() => {
                    setActive(l.id)
                    setOpen(false)
                  }}
                >
                  {l.label}
                </a>
              )
            })}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

