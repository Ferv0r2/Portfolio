import { FC, Fragment } from "react";

/* Hook */
import { useCollection } from "hooks/useCollection";
import { useAuth } from "hooks/useAuth";

/* Component */
import { AsideMenuItemWithSub } from "layout/components/aside/AsideMenuItemWithSub";
import { AsideMenuItem } from "layout/components/aside/AsideMenuItem";
import { AsideMenuUser } from "layout/components/aside/AsideMenuUser";
import { KTSVG, shortAddress } from "utils";

export const AsideMenuMain: FC = () => {
  const { collections } = useCollection();
  const { wallet, account } = useAuth();

  return (
    <>
      <AsideMenuUser
        icon={`/media/svg/brand-logos/${wallet}.svg`}
        title={shortAddress(account.address) || "Error"}
        fontIcon="bi-app-indicator"
      />

      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/dashboard.svg"
        title="Dashboard"
        fontIcon="bi-app-indicator"
      />
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            NFT
          </span>
        </div>
      </div>

      <AsideMenuItem
        to="/nft/management"
        title="NFT Management"
        icon="/media/icons/setting.svg"
      />

      <AsideMenuItemWithSub
        to="/nft/collections"
        title="Collections"
        fontIcon="bi-archive"
        icon="/media/icons/menu-3.svg"
      >
        {collections?.length !== 0
          ? collections?.map((nft) => (
              <Fragment key={nft.contract}>
                <AsideMenuItemWithSub
                  to={`/nft/${nft.contract}`}
                  title={nft.name}
                  url={nft.thumbnail}
                  hasBullet={!nft.thumbnail && true}
                >
                  <AsideMenuItem
                    to={`/nft/${nft.contract}/home`}
                    title="Home"
                    hasBullet={true}
                  />
                  <AsideMenuItem
                    to={`/nft/${nft.contract}/event`}
                    title="Event"
                    hasBullet={true}
                  />
                </AsideMenuItemWithSub>
              </Fragment>
            ))
          : ""}
      </AsideMenuItemWithSub>

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Event
          </span>
        </div>
      </div>

      <AsideMenuItem
        to="/event/create"
        icon="/media/icons/block.svg"
        title="Event Create"
      />

      <AsideMenuItemWithSub
        to="/event/status"
        title="Event Status"
        icon="/media/icons/chart.svg"
      >
        <AsideMenuItem to="/event/live" title="Live" hasBullet={true} />
        <AsideMenuItem to="/event/end" title="End" hasBullet={true} />
        <AsideMenuItem to="/event/pending" title="Pending" hasBullet={true} />
      </AsideMenuItemWithSub>

      <div className="menu-item">
        <div className="menu-content">
          <div className="separator mx-1 my-4" />
        </div>
      </div>

      <div className="menu-item">
        <a
          target="_blank"
          rel="noreferrer"
          className="menu-link"
          href="https://github.com/Ferv0r2"
        >
          <span className="menu-icon">
            <KTSVG path="/media/icons/paper.svg" className="svg-icon-2" />
          </span>
          <span className="menu-title">Document</span>
        </a>
      </div>
    </>
  );
};
