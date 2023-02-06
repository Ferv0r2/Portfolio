import axios from 'axios'
import {INFTTokenDetailAPI} from '../APIModels'

export async function NFTTokenDetailAPI(args: INFTTokenDetailAPI) {
  const request = await axios
    .get(`/api/project/${args.pid}/token/${args.token_id}`, {})
    .then((res) => res.data)

  return request
}
