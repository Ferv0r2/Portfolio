import { FC } from "react";
import clsx from "clsx";
import { shortAddress } from "utils";
import { WalletType } from "components/auth/WalletModel";

interface Props {
  wallet: string;
  selectedWallet: WalletType | null;
  account: string;
  onSelect: any;
}

export const WalletButton: FC<Props> = ({
  wallet,
  selectedWallet,
  account,
  onSelect,
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(wallet)}
      className={clsx(
        "btn btn-flex flex-center fs-6 fs-md-5 btn-light btn-lg w-100 py-6 mb-5",
        selectedWallet === wallet && "ribbon ribbon-end ribbon-clip"
      )}
    >
      {selectedWallet === wallet && (
        <div className="ribbon-label">
          Selected
          <span className="ribbon-inner bg-info" />
        </div>
      )}
      <img
        alt="Logo"
        src={`/media/svg/brand-logos/${wallet.toLowerCase()}.svg`}
        className="h-20px me-3"
      />
      {selectedWallet === wallet
        ? shortAddress(account)
        : `Continue with ${wallet}`}
    </button>
  );
};
