import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

const highlights = [
  { value: 'Django REST Framework', label: 'camada principal de API' },
  { value: 'JWT', label: 'autenticação por token nas rotas protegidas' },
  { value: 'PostgreSQL', label: 'persistência relacional nos sistemas' },
]

const technicalAreas = [
  {
    title: 'Backend',
    items: [
      'Django para estrutura de aplicação.',
      'Django REST Framework para serialização e endpoints HTTP.',
      'JWT para autenticação de acesso.',
    ],
  },
  {
    title: 'Dados e deploy',
    items: [
      'PostgreSQL como banco relacional.',
      'Docker para padronizar ambiente local quando necessário.',
      'Deploy em Render e Vercel conforme a camada da aplicação.',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'React para consumo da API.',
      'Tailwind CSS para interface utilitária e rápida de manter.',
      'Tela voltada a fluxo de cadastro, listagem e atualização.',
    ],
  },
]

const contacts = [
  {
    label: 'E-mail',
    value: 'joaopedrodacruz.dev@gmail.com',
    href: 'mailto:joaopedrodacruz.dev@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/joaop3dro-dev',
    href: 'https://github.com/joaop3dro-dev',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <a href="#topo" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
            João Pedro
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#atuacao">
              Atuação técnica
            </a>
            <a className="transition hover:text-slate-950" href="#projetos">
              Projetos
            </a>
            <a className="transition hover:text-slate-950" href="#contato">
              Contato
            </a>
          </nav>
        </header>

        <main id="topo" className="flex-1">
          <section className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
                Desenvolvedor Full Stack
              </p>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                João Pedro.
                <span className="mt-2 block text-4xl text-slate-700 sm:text-5xl lg:text-6xl">
                  Backend em Django, API em DRF, frontend em React.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Desenvolvo aplicações com Django REST Framework no backend, JWT para autenticação e React + Tailwind
                CSS no frontend. O foco principal está na camada de API e na integração com a interface.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Os projetos abaixo mostram CRUD, autenticação, persistência em PostgreSQL e deploy em Render e Vercel.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Ver projetos
                </a>
                <a
                  href="mailto:joaopedrodacruz.dev@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  Falar por e-mail
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Stack principal
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    Backend em primeiro plano, interface como camada de consumo.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-lg font-semibold text-slate-950">{item.value}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          <section id="atuacao" className="border-t border-slate-200 py-16">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Atuação técnica
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Como estruturo os sistemas.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {technicalAreas.map((area) => (
                  <article key={area.title} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950">{area.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                      {area.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="sobre" className="grid gap-6 border-t border-slate-200 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Sobre</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Backend orientado a API, frontend como camada de consumo.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                Trabalho com Django e Django REST Framework para montar APIs com rotas claras, serialização,
                autenticação JWT e integração com banco relacional.
              </p>
              <p>
                No frontend, uso React e Tailwind CSS para consumir essas APIs e apresentar fluxos de cadastro,
                listagem e atualização sem esconder a lógica da aplicação.
              </p>
            </div>
          </section>

          <section id="projetos" className="border-t border-slate-200 py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Projetos</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Projetos com backend, autenticação e integração real.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600">
                A descrição abaixo foca no que o sistema faz e nas decisões técnicas que sustentam cada entrega.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id="contato" className="border-t border-slate-200 py-16">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.75)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Contato</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                    Aberto para trabalho em backend e integração de API.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                    E-mail e GitHub abaixo para contato direto.
                  </p>
                </div>

                <div className="space-y-3">
                  {contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm transition hover:bg-white/10"
                    >
                      <span className="text-slate-300">{contact.label}</span>
                      <span className="font-medium text-white">{contact.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
