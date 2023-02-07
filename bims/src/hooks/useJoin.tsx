import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { eventJoinState } from "stores";
import { eventJoinData, Joiner } from "utils";

export const useJoin = () => {
  const [eventJoinList, setEventJoinList] = useRecoilState(eventJoinState);

  useEffect(() => {
    if (eventJoinList.length !== 0) {
      setEventJoinList(eventJoinData);
    }
  }, [eventJoinList.length, setEventJoinList]);

  const onAddJoiner = (data: Joiner) => {
    const newJoiner = [...eventJoinList, data];
    setEventJoinList(newJoiner);
  };

  return { eventJoinList, onAddJoiner };
};
