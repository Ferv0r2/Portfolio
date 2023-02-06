import axios from 'axios'

interface Props {
  eiid: number
  token?: string
}

export async function EventJoinDiscordAPI({eiid, token}: Props) {
  const request = await axios
    .get(`/link/${eiid}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
    .then((res) => res.data)

  return request
}
