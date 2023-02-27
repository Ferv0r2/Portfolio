import axios from "axios";
import { IFundingOutputAPI } from "api/APIModel";

const FundingOutputAPI = async (args: IFundingOutputAPI) => {
  const request = await axios
    .post(`/api/funding/${args.token_id}/output`, {
      output_id: args.output_id,
      done: args.done,
    })
    .then((res) => res.data);

  return request;
};

export { FundingOutputAPI };
