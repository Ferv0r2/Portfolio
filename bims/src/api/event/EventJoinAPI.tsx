import axios from 'axios'

export async function EventJoinAPI(eiid: number) {
  const request = await axios.get(`/link/${eiid}`).then((res) => res.data)

  return request
}
