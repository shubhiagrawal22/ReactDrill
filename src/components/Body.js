import React, { useContext, useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { resObj } from "../utils/constant";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API);

    const data = await res.json();
    setRestList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleTopRest = () => {
    const filteredList = restList.filter((res) => res?.info?.avgRating > 4);
    setFilteredData(filteredList);
  };

  if (onlineStatus === false) {
    return <h1>Looks Like you're offline Please check your internet</h1>;
  }

  return restList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter p-4 m-4 flex">
        <div className="search">
          <input
            type="text"
            className="search-input border-2 border-black rounded-lg mx-2"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-1 mx-2 bg-amber-300 rounded-xl hover:bg-black hover:text-white"
            onClick={() => {
              const searchList = restList.filter((res) =>
                res.name.toLowerCase().includes(searchData.toLowerCase())
              );
              setFilteredData(searchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-4 py-1 mx-2 bg-amber-300 rounded-xl hover:bg-black hover:text-white"
          onClick={handleTopRest}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="filter p-4 m-4 flex">
        <label>User name : </label>
        <input
          className="border-2 px-2 border-black mx-4"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="rest-card flex flex-wrap justify-center">
        {filteredData?.map((item) => (
          <RestCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
