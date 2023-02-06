import axios from 'axios'

export async function TwitterAuthAPI(jwt: string) {
  const request = await axios
    .post(`${process.env.REACT_APP_HOST_API_URL}/api/auth/twitter`, {
      headers: {
        Authorization: jwt,
      },
    })
    .then((res) => res.data.authorizationUrl)

  return request
}
