import axios from "axios";
import { ICreateFundingAPI } from "api/APIModel";

const CreateFundingAPI = async (args: ICreateFundingAPI) => {
  const request = await axios
    .post(`/api/funding/${args.token_id}`, {
      title: args.title,
      content: args.content,
      milestone: args.milestone,
    })
    .then((res) => res.data);

  return request;
};

export { CreateFundingAPI };
