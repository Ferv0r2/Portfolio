import axios from 'axios'

export async function UserEventDetailAPI(eid: number) {
  const request = await axios.get(`/api/event/${eid}`).then((res) => res.data)

  return request
}
