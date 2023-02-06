import axios from 'axios'

export async function NFTDetailAPI(pid: number) {
  const request = await axios.get(`/api/project/${pid}`, {}).then((res) => res.data)

  return request
}
