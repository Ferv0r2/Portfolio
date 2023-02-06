import axios from 'axios'
import {IEventBaseAPI} from '../APIModels'

export async function EventStatusAPI(args: IEventBaseAPI) {
  const request = await axios
    .get(`/api/project/${args.pid}/event/${args.eid}/users`)
    .then((res) => res.data)

  return request
}
