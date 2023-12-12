import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const searchImage = "/images/locationSearch.png";
  const [cityName, setCityName] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(`/city/${cityName}`, {replace: true});
  };
  
  return (
    <div className="home-main">
      <h1 className="center-text">Weather World</h1>
      <div className="search-bar">
        <input
          type="text"
          className="input-text"
          placeholder="Search city"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        ></input>
        <img
          className="locationSearch-icon"
          src={searchImage}
          alt=""
          onClick={(e) => submit(e)}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
