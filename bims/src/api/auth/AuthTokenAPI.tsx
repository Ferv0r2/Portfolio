import axios from 'axios'
import {IAuthTokenAPI} from '../APIModels'

export async function AuthTokenAPI(args: IAuthTokenAPI) {
  const request = await axios
    .post('/api/auth/klaytn', {
      chain_id: args.chain_id,
      nonce: args.nonce,
      wallet: args.wallet,
      signature: args.signature,
    })
    .then((res) => res.data)

  return request
}
