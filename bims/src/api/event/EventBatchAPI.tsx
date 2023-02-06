import axios from 'axios'
import {IEventCreateAPI} from '../APIModels'

export async function EventBatchAPI(args: IEventCreateAPI) {
  const request = await axios
    .post(`/api/project/${args.pid}/event/batch`, {
      title: args.title,
      content: args.content,
      start_dt: args.start_dt,
      end_dt: args.end_dt,
      metadata: args.metadata,
      items: args.items
    })
    .then((res) => res.data)

  return request
}
