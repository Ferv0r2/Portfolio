import axios from 'axios'
import {INFTHolderAPI} from '../APIModels'

export async function NFTHolderAPI(args: INFTHolderAPI) {
  const request = await axios
    .get(`/api/project/${args.pid}/holders`, {
      params: {
        size: args.size,
        page: args.page,
      },
    })
    .then((res) => res.data.data)

  return request
}
