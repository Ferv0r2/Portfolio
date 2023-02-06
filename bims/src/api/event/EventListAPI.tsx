import axios from 'axios'

export async function EventListAPI(pid: number) {
  const request = await axios.get(`/api/project/${pid}/event`).then((res) => res.data)

  return request
}
