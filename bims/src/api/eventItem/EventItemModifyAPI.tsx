import axios from 'axios'
import {IEventItem} from '../APIModels'

export async function EventItemModifyAPI(args: IEventItem) {
  const request = await axios
    .post(`/api/event/item/${args.eid}`, {
      title: args.title,
      content: args.content,
      point: args.point,
      type: args.type,
      metadata: args.metadata,
    })
    .then((res) => res.data)

  return request
}
