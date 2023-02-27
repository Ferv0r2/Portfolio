import axios from "axios";
import { ImageUpload } from "api/APIModel";

const AddProfileImageAPI = async (args: ImageUpload) => {
  const request = await axios({
    method: "POST",
    url: "/api/profile",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: args.formData,
  }).then((res) => res.data);

  return request;
};

export { AddProfileImageAPI };
