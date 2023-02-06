import axios from 'axios'
import {IEventModifyAPI} from '../APIModels'

export async function EventModifyAPI(args: IEventModifyAPI) {
  const request = await axios
    .post(`/api/project/${args.pid}/event/${args.eid}`, {
      title: args.title,
      content: args.content,
    })
    .then((res) => res.data)

  return request
}
