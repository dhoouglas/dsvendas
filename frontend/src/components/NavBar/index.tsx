import ImgDsDark from "assets/img/new-logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-0 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3 flex">
          <Link to="/">
            <img src={ImgDsDark} alt="DevSuperior" width="120" height="40" />
          </Link>
        </nav>
      </div>

      <div>
        <h5 className="text-primary my-md-0 fs-6">
          <strong className="text-secondary">DEV</strong>
          <strong>DOUGLAS</strong>
        </h5>
      </div>
    </div>
  );
}

export default NavBar;
