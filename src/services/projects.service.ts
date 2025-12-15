import type { Project } from '@/models/Project'

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Profissional',
    description: 'Portfólio desenvolvido com Vue 3 e Vite',
    stack: ['Vue', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/seuusuario/portfolio',
    liveUrl: 'https://seuportfolio.vercel.app',
  },
  {
    id: 2,
    title: 'API de Projetos',
    description: 'API REST desenvolvida em Laravel',
    stack: ['Laravel', 'MySQL'],
    repoUrl: 'https://github.com/seuusuario/api',
  },
]

export function getProjects(): Promise<Project[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(projects), 500)
  })
}
