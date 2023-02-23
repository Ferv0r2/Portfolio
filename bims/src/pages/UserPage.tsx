import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Hook */
import { useEvent } from "hooks/useEvent";
import { useCollection } from "hooks/useCollection";

/* Components */
import { EventEndCard } from "components/card";
import { Empty } from "components/empty/Empty";
import { Event, NFTBase } from "utils";

const UserPage = () => {
  const params = useParams();
  const { eventList } = useEvent();
  const { collections } = useCollection();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Event & NFTBase>({
    id: 0,
    project_id: 0,
    title: "",
    content: "",
    user_point: 0,
    total_point: 0,
    start_dt: "",
    end_dt: "",
    updated_at: "",
    created_at: "",
    items: [],
    name: "",
    contract: "",
    thumbnail: "",
  });

  useEffect(() => {
    setIsLoading(true);
    if (collections.length !== 0 && eventList.length !== 0) {
      const newData = eventList.filter((v) => v.id === Number(params.eid))[0];
      const currentProject = collections.filter(
        (v) => v.id === newData.project_id
      )[0];
      const totalPoint = newData.items
        .map((v) => v.point)
        .reduce((acc, cur) => acc + cur, 0);

      setData({
        ...newData,
        total_point: totalPoint,
        name: currentProject.name,
        contract: currentProject.contract,
        thumbnail: currentProject.thumbnail,
      });
      setIsLoading(false);
    }
  }, [params.eid, eventList, collections]);

  return (
    <>
      <div className="d-flex mx-auto mt-16 align-items-center justify-content-center">
        <img
          alt="Logo"
          src={data?.thumbnail || "/media/logos/favicon.ico"}
          className="h-45px rounded-circle"
        />
        <h2 className="display-6 m-3">{data?.name || "BIMS"}</h2>
      </div>
      <div className="row m-0 d-flex flex-center py-16 pb-lg-20">
        <div className="w-lg-500px col-11">
          {isLoading ? (
            <Empty>Loading...</Empty>
          ) : (
            <EventEndCard event={data} />
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;
