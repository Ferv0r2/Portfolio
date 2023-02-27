import axios from "axios";
const CheckFundingAPI = async (token_id: number) => {
  const request = await axios
    .get(`/api/funding/${token_id}`)
    .then((res) => res.data);

  return request;
};

export { CheckFundingAPI };
