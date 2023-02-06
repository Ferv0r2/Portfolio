import axios from 'axios'

export async function EventItemDeleteAPI(event_id: number) {
  const request = await axios.delete(`/api/event/item/${event_id}`).then((res) => res.data)

  return request
}
