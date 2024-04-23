import React from "react";
import { IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id } =
    resData?.info;

  return (
    <div className="card m-4 p-4 w-[20%] rounded-lg bg-gray-200 hover:bg-gray-300">
      <div className="card-img">
        <img
          className="rounded-lg w-[100%] h-[200px]"
          src={IMG_URL + cloudinaryImageId}
          alt="img"
        />
      </div>
      <div className="card-name p-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <h4 className="font-medium w-11/12 truncate">{cuisines.slice(0,2).join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} min</h4>
        
      </div>
      <div className="p-2 m-2 flex justify-center items-center">
      <Link to={"/restaurants/" + id}>
          <button className="px-4 py-1 rounded-lg bg-slate-950 text-white hover:bg-amber-300 hover:text-black">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RestCard;
