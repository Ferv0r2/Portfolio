import axios from 'axios'

export async function AuthUserAPI() {
  const request = await axios.get('/api/auth/user').then((res) => res.data)

  return request
}
