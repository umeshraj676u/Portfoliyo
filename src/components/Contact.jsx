const contact = [
  { label: 'Address', value: 'Bhopal, Madhya Pradesh, India' },
  { label: 'Contact Number', value: '+91 8709168603', href: 'tel:+918709168603' },
  { label: 'Email', value: 'umeshraj676u@gmail.com', href: 'mailto:umeshraj676u@gmail.com' },
  { label: 'Resume', value: 'Download Resume', href: '/umesh-resume.pdf' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/umeshraj676u' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/umeshkumar676u/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/G48KesVED9/' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/umeshkumar123' },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide text-amber-300/90">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Contact Me
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300/90">
          Below are the details to reach out to me.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contact.map((c) => (
          <div
            key={c.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-slate-400">{c.label}</p>
            {c.href ? (
              <a
                href={c.href}
                className="mt-2 inline-block text-sm font-semibold text-white hover:text-amber-300"
              >
                {c.value}
              </a>
            ) : (
              <p className="mt-2 text-sm font-semibold text-white">{c.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-2xl font-semibold">
          Have a <span className="text-amber-300">Question?</span>
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">
          I&apos;m happy to connect — send me an email and I&apos;ll get back to you.
        </p>
        <div className="mt-6">
          <a
            href="mailto:umeshraj676u@gmail.com"
            className="inline-flex rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/0 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

