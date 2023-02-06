export interface IAuthTokenAPI {
  chain_id: number
  nonce: string
  wallet: string
  signature: string
}

export interface INFTCreateAPI {
  contract: string
  chain_id: number
  interface: string
  thumbnail?: string
  homepage?: string
}

export interface INFTModifyAPI {
  pid: number
  homepage: string
  thumbnail: string
}

export interface INFTTokenDetailAPI {
  pid: number
  token_id: number
  id: number
  attributes: string[]
}

export interface INFTHolderAPI {
  pid: number
  size: number
  page: number
}

export interface INFTHolderDetailAPI {
  pid: number
  wallet_address: string
}

export interface IEventBaseAPI {
  eid: number
  pid: number
}

export interface IEventJoinAPI extends IEventBaseAPI {
  event_item_id: number
}

export interface IEventCreateAPI {
  pid: number
  title: string
  content: string
  start_dt: Date
  end_dt: Date
  metadata?: any
  items?: IEventItem[]
}

export interface IEventModifyAPI extends IEventBaseAPI {
  title: string
  content: string
}

export interface IEventItem {
  eid: number
  title?: string
  content: string
  point: number
  type: string
  metadata?: any
}
