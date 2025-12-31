import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export interface LoginPayload{
  email: string
  password: string
}

export async function login(payload: LoginPayload) {
  const response = await api.post('/login', payload)

  const token = response.data.token

  // salvar token

  localStorage.setItem('token', token)

  return response.data
}
