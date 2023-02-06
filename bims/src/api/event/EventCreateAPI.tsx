import axios from 'axios'
import {IEventCreateAPI} from '../APIModels'

export async function EventCreateAPI(args: IEventCreateAPI) {
  const request = await axios
    .post(`/api/project/${args.pid}/event`, {
      title: args.title,
      content: args.content,
      start_dt: args.start_dt,
      end_dt: args.end_dt,
      metadata: args.metadata,
    })
    .then((res) => res.data)

  return request
}
