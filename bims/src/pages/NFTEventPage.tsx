import { FC, useEffect, useState } from "react";

/* Hooks */
import { useEvent } from "hooks/useEvent";

/* Components */
import { EventCard } from "components/card";
import { Empty } from "components/empty/Empty";
import { Event, KTSVG, Project } from "utils";

interface Props {
  nft: Project;
}

const NFTEventPage: FC<Props> = ({ nft }) => {
  const { eventList } = useEvent();
  const [currentEvent, setCurrentEvent] = useState<Event[]>([]);
  const [isSorted, setIsSorted] = useState("1");

  useEffect(() => {
    const tmp = eventList.filter((event: Event) => event.project_id === nft.id);

    if (isSorted === "1") {
      tmp.sort((a: Event, b: Event) => b.id - a.id);
    } else if (isSorted === "2") {
      tmp.sort((a: Event, b: Event) => a.id - b.id);
    } else if (isSorted === "3") {
      tmp.sort(
        (a: Event, b: Event) =>
          Number(new Date(b.start_dt)) - Number(new Date(a.start_dt))
      );
    } else if (isSorted === "4") {
      tmp.sort(
        (a: Event, b: Event) =>
          Number(new Date(b.end_dt)) - Number(new Date(a.end_dt))
      );
    }

    setCurrentEvent(tmp);
  }, [eventList, isSorted, nft]);

  const sortHandler = (e: any) => {
    setIsSorted(e.target.value);
  };

  return (
    <>
      <div className="row mb-8 me-1">
        <div className="col-lg-4 col-10 mx-lg-0 mx-auto">
          <div className="card">
            <div className="card-body py-6 d-xxl-flex d-block justify-content-between align-items-center">
              <span className="card-label fs-5 fw-bold text-gray-800 d-flex justify-content-between">
                Sorting by
                <KTSVG
                  path="/media/icons/filter.svg"
                  className="d-xxl-none d-flex svg-icon-muted svg-icon-2x me-2"
                />
              </span>
              <div className="d-flex align-items-center">
                <KTSVG
                  path="/media/icons/filter.svg"
                  className="d-xxl-flex d-none svg-icon-muted svg-icon-2x me-2"
                />
                <select
                  onChange={sortHandler}
                  value={isSorted}
                  className="cursor-pointer mt-2 w-xxl-200px form-select"
                  aria-label="Sorting"
                >
                  <option value="1">Latest</option>
                  <option value="2">Create</option>
                  <option value="3">Start Date</option>
                  <option value="4">End Date</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-8">
        {currentEvent?.length !== 0 ? (
          currentEvent?.map((event: Event) => (
            <div key={event.id} className="col-lg-4 col-10 mx-lg-0 mx-auto">
              <EventCard event={event} nft={nft} />
            </div>
          ))
        ) : (
          <div className="col-lg-10 col-xxl-4 mx-auto mx-lg-0">
            <Empty>Event is empty.</Empty>
          </div>
        )}
      </div>
    </>
  );
};

export default NFTEventPage;
