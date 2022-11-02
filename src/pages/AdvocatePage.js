import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdvocatePage = () => {
  const params = useParams();
  const username = params.username;

  const [advocate, setAdvocate] = useState(null);

  useEffect(() => {
    getData();
  }, [username]);

  let getData = async () => {
    let response = await axios.get(
      `https://cados.up.railway.app/advocates/${username}`
    );
    console.log("Response:", response);
    setAdvocate(response.data.advocate);
  };

  return (
    <>
      {advocate && (
        <div className="advocate_preview_wrapper">
          <img className="advocate_preview_image" src={advocate.profile_pic} />
          <strong>{advocate.name}</strong>
          <br />
          <a href={advocate.twitter}>@{advocate.username}</a>
          <p>{advocate.bio}</p>
        </div>
      )}
    </>
  );
};

export default AdvocatePage;
