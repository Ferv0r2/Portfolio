import axios from 'axios'

export async function EventCheckAPI(eid: number) {
  const request = await axios.get(`/api/user/event/${eid}`).then((res) => res.data)

  return request
}
