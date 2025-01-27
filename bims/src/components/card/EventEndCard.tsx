import { FC, useState } from "react";
import { useToast } from "hooks/useToast";
import { useAuth } from "hooks/useAuth";
import {
  dateCompare,
  KTSVG,
  setColor,
  Event,
  shortAddress,
  NFTBase,
  Joiner,
  getHoursDiffer,
  getDaysDiffer,
  underDay,
} from "utils";
import { WalletConnectModal } from "components/modal/WalletConnectModal";

interface Props {
  event: Event & NFTBase;
  userArray?: Joiner[];
}

export const EventEndCard: FC<Props> = ({ event, userArray }) => {
  const { onUpdate } = useToast();
  const { account } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const eventItemHandler = (id: number, type: string) => {
    if (dateCompare(new Date(event.end_dt), ">")) {
      onUpdate({
        content: "This event has ended.",
        type: "danger",
      });
      return;
    }

    if (dateCompare(new Date(event.start_dt), "<")) {
      onUpdate({
        content: "This event has not started.",
        type: "danger",
      });
      return;
    }

    if (type.toLowerCase() === "discord.invite") {
      onUpdate({
        content: "This event is not supported in portfolio.",
        type: "danger",
      });
      return;
    }
  };

  return (
    <>
      {isOpen && <WalletConnectModal />}
      <div className="card card-custom">
        <div className="card-header">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-dark">
              {event.name || "Loading..."}
            </span>
            <span className="text-muted mt-1 fw-semibold fs-7">
              {shortAddress(event.contract) || "0x00"}
            </span>
          </h3>
          <div className="card-toolbar">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="btn btn-sm btn-secondary"
            >
              {shortAddress(account.address) || "Connect Wallet"}
            </button>
          </div>
        </div>
        <div className="d-flex border-bottom align-items-center text-center h-100px">
          <div className="col-4 border-end h-100">
            <div className="fs-1 fw-bold pb-2 mt-6">
              {event.user_point || 0} / {event.total_point}
            </div>
            <div className="text-muted">Your Score</div>
          </div>
          <div className="col-4 border-end h-100">
            <div className="fs-1 fw-bold pb-2 mt-6">
              {userArray?.length || 0}
            </div>
            <div className="text-muted">All Participants</div>
          </div>

          <div className="col-4 h-100">
            {!underDay(new Date(event.start_dt), new Date(event.end_dt)) ? (
              <>
                <div className="fs-1 fw-bold pb-2 mt-6">
                  {getDaysDiffer(
                    new Date(event.start_dt),
                    new Date(event.end_dt)
                  ) || 30}
                </div>
                <div className="text-muted">Days Left</div>
              </>
            ) : (
              <>
                <div className="fs-1 fw-bold pb-2 mt-6">
                  {getHoursDiffer(
                    new Date(event.start_dt),
                    new Date(event.end_dt)
                  )}
                </div>
                <div className="text-muted">Hours Left</div>
              </>
            )}
          </div>
        </div>
        <div className="card-body p-0 card-scroll">
          <div className="d-flex align-items-center justify-content-center border-bottom text-center h-80px">
            <h2 className="mb-0">{event.title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: event.content }}
            className="ql w-100 border-bottom p-8 text-break min-h-200px overflow-auto"
            style={{
              maxHeight: "300px",
            }}
          />
          <div className="card-body p-0 min-h-100px">
            {event.items.length > 0 &&
              event.items.map((item: any, index: number) => (
                <div
                  key={item.id}
                  onClick={() => eventItemHandler(item.id, item.type)}
                  className={`d-flex ${
                    Number(new Date()) < Number(new Date(event.end_dt)) &&
                    Number(new Date()) > Number(new Date(event.start_dt))
                      ? "cursor-pointer"
                      : "overlay overlay-block"
                  } px-6 py-4 align-items-center justify-content-between ${
                    index !== event.items.length - 1 && "border-bottom"
                  } ${item.is_success && `bg-light-${setColor(item.title)}`}`}
                >
                  <KTSVG
                    path={`/media/svg/social-logos/${item.title.toLowerCase()}.svg`}
                    className={`ms-2 svg-icon-2x svg-icon-${setColor(
                      item.title
                    )}`}
                  />
                  <div className="text-wrap w-75 px-4 align-items-center">
                    {item.content || "Null"}
                    {item.is_success && (
                      <KTSVG
                        path={`/media/icons/verified.svg`}
                        className="svg-icon-2x svg-icon-primary ms-2"
                      />
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <span
                      className={`badge px-6 py-4 fs-8 badge-light-${setColor(
                        item.title
                      )}`}
                    >
                      + {item.point}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="card-footer d-flex align-items-center">
          <img
            alt="Logo"
            src="/media/logos/favicon.ico"
            className="h-20px me-2"
          />
          <div className="text-muted">Powered by Ferv0r2</div>
        </div>
      </div>
    </>
  );
};
