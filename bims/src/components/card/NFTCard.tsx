import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v1 } from "uuid";
import clsx from "clsx";

/* Hook */
import { useCollection } from "hooks/useCollection";
import { useToast } from "hooks/useToast";

/* Component */
import { Dropdown } from "components/dropdown/Dropdown";
import { DeleteCheckModal } from "components/modal/DeleteCheckModal";
import { KTSVG, Project, replaceAccount, shortAddress } from "utils";

interface Props {
  className: string;
  nft: Project;
  mode?: string;
}

export const NFTCard: FC<Props> = ({ className, nft, mode }) => {
  const { onUpdate } = useToast();
  const { onModify, onDelete } = useCollection();
  const navigate = useNavigate();
  const [homepage, setHomepage] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");

  const editHandler = () => {
    onModify({
      id: nft.id,
      homepage: homepage,
      thumbnail: thumbnail,
    });

    onUpdate({
      content: "The change has been completed.",
      type: "primary",
    });

    setThumbnail("");
    setHomepage("");
  };

  const deleteHandler = () => {
    onDelete(nft.id);
    onUpdate({
      content: "Deletion completed successfully.",
      type: "success",
    });
  };

  const getThumbnailHandler = (e: any) => {
    setThumbnail(e.target.value);
  };

  const getHomepageHandler = (e: any) => {
    setHomepage(e.target.value);
  };

  return (
    <>
      <DeleteCheckModal deleteHandler={deleteHandler} />
      <div
        className={clsx(
          `card card-custom shadow py-3 ${className}`,
          mode && "fs-5 ps-8 pt-10"
        )}
      >
        <div
          className={clsx(
            "position-relative card-header px-sm-11 px-3 pt-4 d-flex align-items-center mb-5 overflow-hidden",
            "pb-6"
          )}
        >
          <div
            className={`${
              mode ? "d-block d-md-flex" : "d-flex px-8"
            } align-items-center`}
          >
            <div
              className={clsx(
                "symbol me-5",
                mode ? "symbol-60px" : "symbol-45px"
              )}
            >
              <img
                src={nft.thumbnail || "/media/avatars/blank.png"}
                alt="icon"
              />
            </div>
            <div className="d-flex flex-column pt-4 pt-md-0">
              <p
                className={clsx(
                  "mb-1 text-gray-800 fw-bold",
                  mode ? "fs-3" : "fs-6"
                )}
              >
                {nft.name}
              </p>
              <span className="d-none d-md-inline text-gray-400 fw-semibold">
                {nft.contract}
              </span>
              <span className="d-inline d-md-none text-gray-400 fw-semibold">
                {shortAddress(nft.contract)}
              </span>
            </div>
          </div>

          {mode && (
            <div className="d-flex card-toolbar mb-auto">
              <button
                type="button"
                className="btn btn-sm btn-md-md btn-color-muted btn-active-light-primary fs-6"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
              >
                <KTSVG
                  path="/media/icons/edit.svg"
                  className="svg-icon-2 me-2"
                />
                Edit
              </button>
              <Dropdown
                thumbnailValue={thumbnail}
                homepageValue={homepage}
                inputThumbnail={getThumbnailHandler}
                inputHomepage={getHomepageHandler}
                editHandler={editHandler}
              />
            </div>
          )}
        </div>
        <div
          className={clsx(
            "card-body",
            mode ? "mx-0 mx-md-4 fs-7 fs-md-5" : "mx-4"
          )}
        >
          <div
            className={clsx(
              "d-lg-flex d-block ",
              mode ? "gap-20 lh-xl" : "gap-20"
            )}
          >
            <div className={clsx("d-flex", mode && "min-w-200px")}>
              <div className="fw-bolder">
                {["Name", "Symbol", "Total supply"].map((v) => (
                  <ol key={v1()} className={clsx("p-0", mode && "pe-4")}>
                    {v}
                  </ol>
                ))}
              </div>
              <div>
                <ol>{nft.name}</ol>
                <ol>{nft.symbol}</ol>
                <ol>{replaceAccount(nft.total_supply)}</ol>
              </div>
            </div>
            <div className="d-flex">
              <div className="fw-bolder">
                <ol className={clsx("p-0", mode && "pe-4")}>Holders</ol>
                <ol className={clsx("p-0", mode && "pe-4")}>Event count</ol>
                {mode && <ol className="p-0 pe-4">Official Site</ol>}
              </div>
              <div>
                <ol>{replaceAccount(nft.holder_count)}</ol>
                <ol>{nft.event_count ? replaceAccount(nft.event_count) : 0}</ol>
                {mode && (
                  <ol>
                    <a
                      target="_blank"
                      className="text-dark text-hover-primary"
                      href={nft.homepage}
                      rel="noreferrer"
                    >
                      {nft.homepage || ""}
                    </a>
                  </ol>
                )}
              </div>
            </div>
          </div>
        </div>
        {mode ? (
          ""
        ) : (
          <div className="card-footer d-flex justify-content-between align-items-center py-3">
            <a
              href={nft.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-hover-primary text-"
            >
              {nft.homepage}
            </a>

            <button
              type="button"
              onClick={() => {
                navigate(`/nft/${nft.contract}/home`);
              }}
              className="btn btn-sm btn-active-color-primary pe-0 me-2"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </>
  );
};
