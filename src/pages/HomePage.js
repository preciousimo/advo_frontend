import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [advocates, setAdvocates] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let response = await axios.get("https://cados.up.railway.app/advocates/");
    console.log("Response:", response);
    setAdvocates(response.data.advocates);
  };

  return (
    <div className="main_container">
      <h2>
        Search (TOTAL SEARCH) developer advocates found by @dennisivy's
        webscraper and the TwitterAPI.
      </h2>

      <div className="advocate_list">
        {advocates.map((advocate, index) => (
          <div className="advocate_preview_wrapper" key={index}>
            <Link to={`/advocate/${advocate.username}`}>
            <img
              className="advocate_preview_image"
              src={advocate.profile_pic}
            />
            </Link>
            <strong>{advocate.name}</strong>
            <br/>
            <a href={advocate.twitter}>@{advocate.username}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
