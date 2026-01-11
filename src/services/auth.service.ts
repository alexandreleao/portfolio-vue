import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function login(data: { email: string; password: string }) {
  const response = await api.post('/login', data)
  return response.data
}
