import axios from 'axios'

export async function NFTListAPI() {
  const request = await axios.get('/api/project').then((res) => res.data)

  return request
}
