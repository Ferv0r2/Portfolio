import axios from 'axios'
import {IEventBaseAPI} from '../APIModels'

export async function EventDeleteAPI(args: IEventBaseAPI) {
  const request = await axios
    .delete(`/api/project/${args.pid}/event/${args.eid}`)
    .then((res) => res.data)

  return request
}
