import React, { useState } from "react";
import RestCard from "./RestCard";
import { resObj } from "../utils/constant";

const Body = () => {

    const [restList, setRestList] = useState(resObj);

    const handleTopRest = () => {
        const filteredList = restList.filter((res) => res.avgRating > 4);
        console.log(filteredList);
        setRestList(filteredList);
    }

  return (
    <div className="body">
      <div className="search">
        search
        <button
          className="filter-btn"
          onClick={handleTopRest}
        >
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
