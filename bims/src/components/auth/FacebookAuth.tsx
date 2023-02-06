import { FC } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookAuth: FC = () => {
  return (
    <FacebookLogin
      className="btn btn-primary"
      appId={process.env.REACT_APP_FACEBOOK_APP_ID || ""}
      onSuccess={(response) => {
        console.log("Login Success!", response);
      }}
      onFail={(error) => {
        console.log("Login Failed!", error);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!", response);
      }}
    />
  );
};

export { FacebookAuth };
