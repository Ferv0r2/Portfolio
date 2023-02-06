import { FC, useEffect, useState } from "react";
import clsx from "clsx";

/* Components */
import { HoldersTable } from "components/table/HoldersTable";
import { holderData, Holders, NFT } from "utils";
import { useToast } from "hooks/useToast";

interface Props {
  pid: number;
  totalSupply: number;
  holderCount: number;
  className?: string;
}

const TabTable: FC<Props> = ({ pid, totalSupply, holderCount, className }) => {
  const { onUpdate } = useToast();
  const [currentHoldersSection, setCurrentHoldersSection] = useState(0);
  const [currentHoldersPage, setCurrentHoldersPage] = useState(0);
  const [holderList, setHolderList] = useState<NFT & Holders>({
    name: "",
    symbol: "",
    contract: "",
    total_supply: 0,
    owners: [],
  });

  useEffect(() => {
    if (holderData.owners.length === 0) {
      setHolderList(holderData);
    }
  }, []);

  const holderPrevHandler = () => {
    if (currentHoldersSection === 0) {
      if (currentHoldersPage === 0) {
        onUpdate({
          content: "This is the first page.",
          type: "primary",
        });
      } else {
        setCurrentHoldersPage(0);
      }
      return;
    }

    if (currentHoldersSection > 0) {
      setCurrentHoldersSection(currentHoldersSection - 1);
      setCurrentHoldersPage(4);
    } else {
      setCurrentHoldersPage(0);
    }
  };

  const holderNextHandler = () => {
    const lastSection = Math.floor(holderCount / 75);
    const lastPage = Math.floor(holderCount / 15) % 5;
    if (currentHoldersSection === lastSection) {
      if (currentHoldersPage === lastPage) {
        onUpdate({
          content: "This is the last page.",
          type: "primary",
        });
      } else {
        setCurrentHoldersPage(lastPage);
      }
      return;
    }
    if (currentHoldersSection + 1 > lastSection) {
      setCurrentHoldersPage(lastSection);
    } else {
      setCurrentHoldersSection(currentHoldersSection + 1);
      setCurrentHoldersPage(0);
    }
  };

  const holderSelectHandler = (page: number) => {
    setCurrentHoldersPage(page % 5);
  };

  return (
    <div
      className={clsx(
        "table-responsive rounded shadow bg-semiwhite",
        className
      )}
    >
      <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6 p-8">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#holders">
            Holders
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade active show" id="holders" role="tabpanel">
          <HoldersTable
            list={holderList.owners}
            section={currentHoldersSection}
            page={currentHoldersPage}
            lastSection={Math.floor(holderCount / 75)}
            lastPage={Math.floor(holderCount / 15) % 5}
            totalSupply={totalSupply}
            prevHandler={holderPrevHandler}
            nextHandler={holderNextHandler}
            selectHandler={(page: number) => holderSelectHandler(page)}
          />
        </div>
      </div>
    </div>
  );
};

export { TabTable };
