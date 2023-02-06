import axios from 'axios'

export async function AuthNonceAPI() {
  const request = await axios.post('/api/auth/klaytn/prepare', {}).then((res) => res.data.code)

  return request
}
