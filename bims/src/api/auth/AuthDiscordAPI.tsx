import axios from 'axios'

export async function AuthDiscordAPI(code: string) {
  const request = await axios
    .post('/api/signin/discord', {
      code: code,
    })
    .then((res) => res.data)

  return request
}
