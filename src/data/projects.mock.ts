export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
}

export const projectsMock: Project[] = [
  {
    id: 1,
    title: 'Portfólio Vue.js',
    description: 'Portfólio profissional desenvolvido com Vue 3 e Vite.',
    technologies: ['Vue', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/seu-usuario/portfolio-vue',
    demoUrl: 'https://seu-portfolio.vercel.app',
  },
  {
    id: 2,
    title: 'API Laravel',
    description: 'API RESTful construída com Laravel seguindo boas práticas.',
    technologies: ['Laravel', 'MySQL', 'REST'],
    githubUrl: 'https://github.com/seu-usuario/api-laravel',
  },
]
