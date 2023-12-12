import "./index.css";
import { Link } from "react-router-dom";

function CityDataLoading() {
  return (
    <div className="main">
      <div className="not-found">
        <p>Sorry, the city you are looking for does not exist.</p>
      </div>
      <Link className="location" to="/">
        Go Home
      </Link>
    </div>
  );
}

export default CityDataLoading;
