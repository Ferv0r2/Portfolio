import { FC } from "react";
import { useParams } from "react-router-dom";

/* API */
import { useQuery } from "react-query";
import { NFTDetailAPI, UserEventDetailAPI } from "api";

/* Components */
import { EventUser } from "components/item/EventUser";
import { Empty } from "components/empty/Empty";

const UserPage: FC = () => {
  const params = useParams();
  const { isLoading, data } = useQuery(["UserEvent"], async () => {
    const res = await UserEventDetailAPI(Number(params.eid));
    const nft = await NFTDetailAPI(res.project_id);
    return {
      ...res,
      name: nft.name,
      contract: nft.contract,
      thumbnail: nft.thumbnail,
    };
  });

  return (
    <>
      <div className="d-flex mx-auto mt-16 align-items-center justify-content-center">
        <img
          alt="Logo"
          src={data?.thumbnail || "/media/logos/favicon.ico"}
          className="h-45px rounded-circle"
        />
        <h2 className="display-6 m-3">{data?.name || "METAONEER"}</h2>
      </div>
      <div className="row m-0 d-flex flex-center py-16 pb-lg-20">
        {isLoading ? (
          <div className="col-md-10 col-xxl-4 mx-auto">
            <Empty>Loading...</Empty>
          </div>
        ) : (
          <div className="w-lg-500px col-11">
            <EventUser isLoading={isLoading} event={data} />
          </div>
        )}
      </div>
    </>
  );
};

export default UserPage;
