import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
// import { resObj } from "../utils/constant";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const handleTopRest = () => {
    const filteredList = restList.filter((res) => res.avgRating > 4);
    setFilteredData(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API);

    const data = await res.json();
    setRestList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchData);
              const searchList = restList.filter((res) =>
                res.name.toLowerCase().includes(searchData.toLowerCase())
              );
              setFilteredData(searchList);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleTopRest}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-card">
        {filteredData.map((item) => (
          <RestCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
