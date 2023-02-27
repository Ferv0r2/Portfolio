import axios from "axios";
import { ICreateMilestoneAPI } from "api/APIModel";

const CreateMilestoneAPI = async (args: ICreateMilestoneAPI) => {
  const request = await axios
    .post("/milestone", {
      token_id: args.token_id,
      milestone_id: args.milestone_id,
      status: args.status,
      address: args.address,
    })
    .then((res) => res.data);

  return request;
};

export { CreateMilestoneAPI };
