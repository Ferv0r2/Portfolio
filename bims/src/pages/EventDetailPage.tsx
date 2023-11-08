import { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";

/* Hook */
import { useEvent } from "hooks/useEvent";
import { useCollection } from "hooks/useCollection";
import { useJoin } from "hooks/useJoin";

/* Component */
import { EventEndCard } from "components/card";
import { UserTable } from "components/table/UserTable";
import { KTSVG, Event, NFTBase, Joiner } from "utils";

const BASE_URL = "https://bims.wontae.net/user/";
const EventDetailPage = () => {
  const params = useParams();
  const { eventList } = useEvent();
  const { collections } = useCollection();
  const { eventJoinList } = useJoin();
  const [copied, setCopied] = useState<boolean>(false);
  const [userArray, setUserArray] = useState<Joiner[]>([]);
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
  }, [params.eid, eventList, collections]);

  useEffect(() => {
    const tmp = eventJoinList.sort((a: Joiner, b: Joiner) => b.point - a.point);
    setUserArray(tmp);
  }, [params, eventJoinList]);

  useEffect(() => {
    if (!copied) return;

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [copied]);

  return (
    <div className="row py-4 gy-10">
      <div className="col-lg-6 col-11 mx-lg-0 mx-auto">
        <div className="card card-custom shadow bg-semiwhite">
          <div className="card-header">
            <h3 className="card-title">
              <span>Event Participants</span>
            </h3>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive rounded shadow bg-semiwhite h-600px overflow-auto">
              <UserTable
                list={userArray}
                total_point={data?.total_point ?? 0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-11 mx-auto">
        <EventEndCard event={data} userArray={userArray} />
        <div className="card mt-8">
          <div className="card-body w-100">
            <div className="ms-2 mb-3 fw-bold">Event URL</div>
            <div className="d-flex justify-content-between align-items-center bg-gray-100 rounded p-4">
              <div className="text-truncate me-1">{BASE_URL + data?.id}</div>
              <OverlayTrigger
                key="copy-to-clipboard"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-copy-to-clipboard">
                    {!copied ? "Copy URL" : "Copied !"}
                  </Tooltip>
                }
              >
                <CopyToClipboard
                  text={BASE_URL + data?.id}
                  onCopy={() => setCopied(true)}
                >
                  <div className="btn btn-icon btn-active-light-primary">
                    <KTSVG
                      path={`/media/icons/clipboard-${
                        !copied ? "solid" : "fill"
                      }.svg`}
                      className="svg-icon-2x"
                    />
                  </div>
                </CopyToClipboard>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
