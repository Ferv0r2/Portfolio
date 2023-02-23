import { FC, useEffect } from "react";
import Calendar, { EventObject } from "@toast-ui/calendar";
import { useEvent } from "hooks/useEvent";
import { useThemeMode } from "components/theme-mode";
import { Event } from "utils";

interface Props {
  className?: string;
}

export const CalendarItem: FC<Props> = ({ className }) => {
  const { eventList } = useEvent();
  const { mode } = useThemeMode();

  useEffect(() => {
    const events: EventObject = eventList?.map((event: Event, index) => ({
      id: event.id,
      calendarId: `cal${index % 4}`,
      title: event.title,
      start: event.start_dt,
      end: event.end_dt,
    }));

    const calendar = new Calendar("#calander", {
      defaultView: "month",
      theme: {
        common: {
          backgroundColor: `${mode === "light" ? "white" : "#1E1E2D"}`,
          dayName: {
            color: `${mode === "light" ? "#1E1E2D" : "white"}`,
          },
          saturday: {
            color: "#009ef7",
          },
        },
      },
      timezone: {
        zones: [
          {
            timezoneName: "Asia/Seoul",
            displayLabel: "Seoul",
          },
        ],
      },
      calendars: [
        {
          id: "cal0",
          name: "Event",
          backgroundColor: `${mode === "light" ? "#8adcac" : "#40da8a"}`,
        },
        {
          id: "cal1",
          name: "Event",
          backgroundColor: `${mode === "light" ? "#ffd76b" : "#f1bc00"}`,
        },
        {
          id: "cal2",
          name: "Event",
          backgroundColor: `${mode === "light" ? "#97cffb" : "#0095e8"}`,
        },
        {
          id: "cal3",
          name: "Event",
          backgroundColor: `${mode === "light" ? "#F78484" : "#d9214e"}`,
        },
      ],
      month: {
        visibleWeeksCount: 2,
      },
    });

    calendar.setOptions({
      template: {
        popupDetailDate({ start, end }) {
          return `${start.toString()} - ${end.toString()}`;
        },
      },
      isReadOnly: true,
    });

    calendar.createEvents(events);

    calendar.render();
  }, [eventList, mode]);

  return (
    <div className={`card d-xxl-flex d-none ${className}`}>
      <div id="calander" className="card-body" />
    </div>
  );
};
