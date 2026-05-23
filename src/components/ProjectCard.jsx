export default function ProjectCard({ project }) {
  const content = (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(15,23,42,0.34)]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col gap-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Projeto
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            {project.title}
          </h3>
          <p className="text-sm leading-6 text-slate-600">{project.description}</p>
        </div>

        <ul className="space-y-2 text-sm leading-6 text-slate-700">
          {project.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500">
          <span>Repositório no GitHub</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
      >
        {content}
      </a>
    )
  }

  return content
}
