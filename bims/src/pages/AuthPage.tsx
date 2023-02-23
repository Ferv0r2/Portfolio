import { Login } from "components/auth/Login";
import { Footer } from "layout/components/Footer";

const AuthPage = () => {
  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        <div className="d-flex mb-12 align-items-center">
          <img alt="Logo" src="/media/logos/favicon.ico" className="h-45px" />
          <h2 className="display-6 m-3">BIMS</h2>
        </div>
        <div className="w-md-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
          <Login />
        </div>
      </div>
      <div className="footer">
        <div className="col-8 mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
