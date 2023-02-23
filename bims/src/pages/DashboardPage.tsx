import { QuickMenu, CalendarItem, EventList } from "components/dashboard";

const DashboardPage = () => {
  return (
    <>
      <div className="row gy-5 g-md-5 g-xxl-8">
        <div className="col-md-10 col-xxl-4 mx-md-auto mx-xxl-0">
          <QuickMenu
            className="card-xxl-stretch mb-xl-8"
            balance={Number(sessionStorage.getItem("WALLET_BALANCE"))}
          />
        </div>
        <div className="col-md-10 col-xxl-8 mx-md-auto mx-xxl-0 pt-sm-0 pt-4">
          <CalendarItem className="card-xxl-stretch mb-xl-8" />
        </div>
      </div>

      <div className="row gy-5 g-md-5 gx-xxl-8">
        <div className="col-md-10 col-xxl-4 mx-md-auto mx-xxl-0">
          <EventList className="card-xxl-stretch mb-xl-3" title="Live" />
        </div>

        <div className="col-md-10 col-xxl-4 mx-md-auto mx-xxl-0">
          <EventList className="card-xxl-stretch mb-xl-3" title="End" />
        </div>

        <div className="col-md-10 col-xxl-4 mx-md-auto mx-xxl-0">
          <EventList className="card-xxl-stretch mb-xl-3" title="Pending" />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
