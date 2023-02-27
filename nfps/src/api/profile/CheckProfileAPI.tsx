import axios from "axios";
import { InitialUserData } from "api/APIModel";

const CheckProfileAPI = async (args: InitialUserData) => {
  const request = await axios
    .get(`/api/profile/${args.chain_id}/${args.address}?_=${Date.now()}`)
    .then((res) => res.data);

  return request;
};

export { CheckProfileAPI };
