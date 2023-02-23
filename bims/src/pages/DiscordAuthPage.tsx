import { useToast } from "hooks/useToast";
import { KTSVG } from "utils";

const DiscordAuthPage = () => {
  const { onUpdate } = useToast();

  const authHandler = async () => {
    onUpdate({
      content: "This event is not supported in portfolio.",
      type: "primary",
    });
  };

  return (
    <div className="d-flex flex-column mt-12">
      <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        <div className="d-flex mb-12 align-items-center">
          <img alt="Logo" src="/media/logos/favicon.ico" className="h-45px" />
          <h2 className="display-6 m-3">BIMS</h2>
        </div>
        <div className="card shadow mx-auto">
          <div className="card-header border-0 pt-6">
            <KTSVG
              path="/media/icons/warning.svg"
              className="svg-icon-4x svg-icon-primary mx-auto"
            />
          </div>
          <div className="card-body">
            <div className="card-title fs-5 text-center">
              Press button to complete authentication.
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button
              onClick={authHandler}
              type="button"
              className="btn btn-primary"
            >
              <span className="indicator-label">Connect</span>
              <span className="indicator-progress">
                Please wait...{" "}
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordAuthPage;
