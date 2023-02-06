import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { eventListState } from "stores";
import { eventDataArray } from "utils";

interface InputEvent {
  project_id: number;
  title: string;
  content: string;
  start_dt: Date;
  end_dt: Date;
  items: any;
}

export const useEvent = () => {
  const [eventList, setEventList] = useRecoilState(eventListState);

  useEffect(() => {
    if (eventList.length === 0) {
      setEventList(eventDataArray);
    }
  }, [eventList.length, setEventList]);

  const onAddEvent = (data: InputEvent) => {
    setEventList([
      ...eventList,
      {
        id: eventList.length + 1,
        project_id: data.project_id,
        title: data.title,
        content: data.content,
        start_dt: data.start_dt.toISOString(),
        end_dt: data.end_dt.toISOString(),
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        items: data.items,
      },
    ]);
  };

  return { eventList, onAddEvent };
};
