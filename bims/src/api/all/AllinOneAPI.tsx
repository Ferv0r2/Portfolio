import axios from 'axios'

export async function AllinOneAPI() {
  const request = await axios.get(`/api/project/all`).then((res) => res.data)

  return request
}
