import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* Hooks */
import { useEvent } from "hooks/useEvent";

/* Compontent */
import { EventItem } from "components/dashboard/EventItem";
import { Event } from "utils";

interface Props {
  className: string;
  title: string;
}

export const EventList: FC<Props> = ({ className, title }) => {
  const navigate = useNavigate();
  const { eventList } = useEvent();
  const [isType, setIsType] = useState(0);
  const [statusList, setStatus] = useState<Event[]>([]);

  useEffect(() => {
    if (title === "Live") {
      const tmp = eventList.filter(
        (event: Event) =>
          new Date(event.start_dt) <= new Date() &&
          new Date(event.end_dt) > new Date()
      );
      tmp.sort(
        (a: Event, b: Event) =>
          Number(new Date(a.end_dt)) - Number(new Date(b.end_dt))
      );
      tmp.filter((v) => v.items);
      setStatus(tmp);
      setIsType(0);
    } else if (title === "End") {
      const tmp = eventList.filter(
        (event: Event) => new Date(event.end_dt) <= new Date()
      );
      tmp.sort(
        (a: Event, b: Event) =>
          Number(new Date(b.end_dt)) - Number(new Date(a.end_dt))
      );
      tmp.filter((v) => v.items);
      setStatus(tmp);
      setIsType(1);
    } else {
      const tmp = eventList.filter(
        (event: Event) => new Date(event.start_dt) > new Date()
      );
      tmp.sort(
        (a: Event, b: Event) =>
          Number(new Date(a.start_dt)) - Number(new Date(b.start_dt))
      );
      tmp.filter((v) => v.items);
      setStatus(tmp);
      setIsType(2);
    }
  }, [eventList, title]);

  return (
    <div className={`card ${className} min-h-400px`}>
      <div className="card-header mt-2 border-0">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-dark">{title}</span>
          <span className="text-muted mt-1 fw-semibold fs-7">
            Recent 5 tasks
          </span>
        </h3>

        <div className="card-toolbar">
          <button
            type="button"
            onClick={() => navigate(`/event/${title.toLowerCase()}`)}
            className="btn btn-sm p-2 btn-color-gray btn-active-light-primary"
          >
            +More
          </button>
        </div>
      </div>
      <div className="card-body pt-4">
        {statusList?.length !== 0 ? (
          statusList
            ?.slice(0, 5)
            .map((event: Event, index) => (
              <EventItem
                key={event.id}
                eventItem={event}
                isType={isType}
                index={index}
              />
            ))
        ) : (
          <div className="d-flex align-items-center mb-8">
            <span className="bullet bullet-vertical h-40px bg-success" />
            <div className="flex-grow-1 mx-5">
              <span className="text-gray-800 fs-6">
                {isType === 0 && "Live event is empty."}
                {isType === 1 && "End event is empty."}
                {isType === 2 && "Pending event is empty."}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
