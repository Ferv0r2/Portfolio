import { FC } from "react";
import clsx from "clsx";

interface Props {
  toggleBtnClass?: string;
}

const Logout: FC<Props> = ({ toggleBtnClass }) => {
  const logoutHandler = () => {
    sessionStorage.removeItem("ACCOUNT_INFO");
    sessionStorage.removeItem("WALLET_INFO");
    document.location.reload();
  };

  return (
    <button
      onClick={logoutHandler}
      type="button"
      className={clsx("btn btn-light ", toggleBtnClass)}
    >
      <i className="las la-door-open fs-1" />
      Sign out
    </button>
  );
};

export { Logout };
