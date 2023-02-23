import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useCollection } from "hooks/useCollection";
import { getDaysDiffer } from "utils";

interface Props {
  eventItem: any;
  isType: number;
  index: number;
}

export const EventItem: FC<Props> = ({ eventItem, isType, index }) => {
  const navigate = useNavigate();
  const { collections } = useCollection();
  const [isFocus, setFocus] = useState<boolean>(false);
  const nft = collections.filter((item) => (item.id === 111 ? item : ""))[0];

  const moveHandler = (e: any) => {
    navigate(`/nft/${nft.contract}/event/${eventItem.id}`);
  };

  const color = ["success", "warning", "primary", "danger"];
  return (
    <div
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      onClick={moveHandler}
      className="d-flex cursor-pointer align-items-center mb-8"
    >
      <span
        className={clsx(
          "bullet bullet-vertical h-40px",
          `bg-${color[index % color.length]}`
        )}
      />
      <div className="flex-grow-1 mx-5">
        <span
          className={clsx(
            "fw-bold fs-6",
            isFocus ? "text-primary" : "text-gray-800"
          )}
        >
          {eventItem.title}
        </span>
        <span className="w-20 text-muted fw-semibold d-block">{nft.name}</span>
      </div>
      <span
        className={clsx(
          "badge fs-8 fw-bold",
          `badge-light-${color[index % color.length]}`
        )}
      >
        {isType === 0 &&
          `D${getDaysDiffer(new Date(eventItem.end_dt), new Date()) || "-day"}`}
        {isType === 1 &&
          `D+${
            Math.abs(getDaysDiffer(new Date(), new Date(eventItem.end_dt))) ||
            "day"
          }`}
        {isType === 2 &&
          `D${
            getDaysDiffer(new Date(eventItem.start_dt), new Date()) || "-day"
          }`}
      </span>
    </div>
  );
};
