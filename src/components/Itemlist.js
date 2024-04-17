import React from "react";
import { IMG_URL } from "../utils/constant";

const Itemlist = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            key={item.card.info.id}
            className="m-2 p-3 border-b-2 border-gray-300"
          >
            <div className="flex justify-between">
              <div className="w-9/12 flex flex-col py-2">
                <span className="font-semibold text-gray-900">
                  {item.card.info.name}
                </span>
                <span className="text-sm text-gray-700">
                  ₹{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>

                <p className="text-xs text-gray-500">
                  {item.card.info.description}
                </p>
              </div>
              <div className="w-3/12 p-2 relative">
                <div className="absolute bottom-7 left-7">
                  <button className="p-1 bg-white shadow-lg rounded-lg font-medium">Add +</button>
                </div>
                <img
                  src={IMG_URL + item.card.info.imageId}
                  alt=""
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itemlist;
