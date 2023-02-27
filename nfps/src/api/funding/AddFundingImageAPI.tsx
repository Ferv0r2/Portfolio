import axios from "axios";
import { ImageUpload } from "api/APIModel";

const AddFundingImageFundingAPI = async (args: ImageUpload) => {
  const request = await axios({
    method: "POST",
    url: `/api/funding/${args.token_id}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: args.formData,
  }).then((res) => res.data);

  return request;
};

export { AddFundingImageFundingAPI };
