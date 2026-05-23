export const projects = [
  {
    title: 'Sistema de Tarefas',
    description:
      'CRUD de tarefas com Django REST Framework no backend, React no frontend e autenticação JWT para acesso às rotas protegidas.',
    tags: ['Django REST Framework', 'JWT', 'React', 'Tailwind CSS'],
    accent: 'from-cyan-500/20 to-sky-500/5',
    href: 'https://github.com/joaop3dro-dev/task_manager',
    details: [
      'Rotas protegidas no backend com autenticação por token.',
      'Interface consumindo API real para criar, editar, listar e concluir tarefas.',
      'Separação entre camada de API, autenticação e UI.',
    ],
  },
  {
    title: 'Sistema de Estoque',
    description:
      'Controle de estoque com Django no backend, React no frontend e PostgreSQL para persistência de produtos, entradas e saídas.',
    tags: ['Django', 'React', 'PostgreSQL', 'Tailwind CSS'],
    accent: 'from-amber-500/20 to-orange-500/5',
    href: 'https://github.com/joaop3dro-dev/django-stock-system',
    details: [
      'Fluxo de cadastro e movimentação de produtos conectado ao backend.',
      'Persistência em PostgreSQL com foco em consistência dos dados.',
      'Interface orientada à operação de estoque, não apenas à visualização.',
    ],
  },
]
