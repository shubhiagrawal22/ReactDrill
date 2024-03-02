import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
// import { resObj } from "../utils/constant";

const Body = () => {
  const [restList, setRestList] = useState([]);

  const handleTopRest = () => {
    const filteredList = restList.filter((res) => res.avgRating > 4);
    console.log(filteredList);
    setRestList(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://mocki.io/v1/e4e8c942-7e2c-4fe6-b9af-8734e74adf31"
    );

    const data = await res.json();
    setRestList(data);
  };

  return restList === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        search
        <button className="filter-btn" onClick={handleTopRest}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-card">
        {restList.map((item) => (
          <RestCard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
