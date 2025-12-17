import { projectsMock, type Project } from '@/data/projects.mock'

class ProjectsService {
  getAll(): Promise<Project[]> {
    return Promise.resolve(projectsMock)
  }
}

export default new ProjectsService()
