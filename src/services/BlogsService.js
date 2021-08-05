import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { convertToQuery } from '../utils/Query.js'
import { api } from './AxiosService'

class BlogsService {
  async getAll(query = {}) {
    const res = await api.get('/api/blogs' + convertToQuery(query))
    logger.log(res.data)
    AppState.blogs = res.data
    logger.log('Appstate blogs:', AppState.blogs)
  }

  async createBlog(rawBlog) {
    const res = await api.post('/api/blogs', rawBlog)
    logger.log(res.data)
    await this.getAll()
  }
}

export const blogsService = new BlogsService()
