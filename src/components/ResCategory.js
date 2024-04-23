import React, { useState } from "react";
import Itemlist from "./Itemlist";

const ResCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
    <div className="w-8/12 mx-auto my-4 p-3 bg-gray-200 shadow-xl rounded-md">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="font-bold">{data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})</span>
      <span> ▼ </span>
      </div>
        {showItems && <Itemlist items={data?.card?.card?.itemCards} />}
    </div>
  </div>
  );
};

export default ResCategory;
