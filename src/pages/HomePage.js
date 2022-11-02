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
    <div>
      <h1>Home Page</h1>

      <div>
        {advocates.map((advocate, index) => (
          <div key={index}>
            <img  src={advocate.profile_pic}/>
            <strong>{advocate.name}</strong>
            <a href={advocate.twitter}>@{advocate.username}</a>
            <Link to={`/advocate/${advocate.username}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
