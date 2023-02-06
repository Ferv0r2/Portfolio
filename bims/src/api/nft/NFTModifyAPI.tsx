import axios from 'axios'
import {INFTModifyAPI} from '../APIModels'

export async function NFTModifyAPI(args: INFTModifyAPI) {
  const request = await axios
    .post(`/api/project/${args.pid}`, {
      homepage: args.homepage,
      thumbnail: args.thumbnail,
    })
    .then((res) => res.data.authorizationUrl)

  return request
}
