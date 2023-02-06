import { FC, useState } from "react";

/* Hooks */
import { useCollection } from "hooks/useCollection";
import { useToast } from "hooks/useToast";

/* Components */
import { NFTCard } from "components/card/NFTCard";
import { Empty } from "components/empty/Empty";

const NFTManagementPage: FC = () => {
  const { collections, onAddCollection } = useCollection();
  const { onUpdate } = useToast();
  const [contract, setContract] = useState<string>("");
  const [addLoading, setAddLoading] = useState(false);

  const addContractHandler = async () => {
    if (contract.trim().length === 0) {
      onUpdate({
        content: "Please enter a contract.",
        type: "primary",
      });
      setContract("");
      return;
    } else if (
      contract.trim().slice(0, 2) !== "0x" ||
      contract.trim().length !== 42
    ) {
      onUpdate({
        content: "The address is invalid. Please re-enter.",
        type: "danger",
      });
      setContract("");
      return;
    }
    setAddLoading(true);

    try {
      onAddCollection(contract);
    } catch (err) {
      onUpdate({
        content: "You have already registered or do not have [Owner] rights.",
        type: "danger",
      });
      setAddLoading(false);
      return;
    }

    setContract("");
    onUpdate({
      content: "NFT Registration is complete.",
      type: "success",
    });
    setAddLoading(false);
  };

  const getInputHandler = (e: any) => {
    setContract(e.target.value);
  };

  return (
    <>
      <form>
        <div className="row">
          <div className="col-11 col-md-5 mx-auto mx-lg-0 mx-sm-8">
            <label
              htmlFor="contractAddress"
              className="form-label p-2 required form-label"
            >
              Contract Address
            </label>
            <input
              type="text"
              className="form-control"
              id="contractAddress"
              value={contract}
              onChange={getInputHandler}
              placeholder="0x00000000.."
            />
          </div>
          <div className="col-11 col-md-auto d-flex justify-content-end mt-4 mt-md-0 mx-auto mx-md-0 align-self-end">
            <button
              type="button"
              onClick={addContractHandler}
              className="btn btn-sm btn-primary mb-1 "
              disabled={addLoading}
              data-kt-indicator={addLoading && "on"}
            >
              <span className="indicator-label">Submit</span>
              <span className="indicator-progress">
                Please wait...{" "}
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </div>
      </form>
      <div className="separator border-white my-10" />
      <div className="row">
        {collections?.length !== 0 ? (
          collections?.map((nft) => (
            <NFTCard
              key={nft.contract}
              className="col-11 col-lg-5 mx-lg-4 mx-auto m-4"
              nft={nft}
            />
          ))
        ) : (
          <div className="col-md-10 col-xxl-4 mx-lg-4 mx-auto">
            <Empty>No NFTs are registered.</Empty>
          </div>
        )}
      </div>
    </>
  );
};

export default NFTManagementPage;
