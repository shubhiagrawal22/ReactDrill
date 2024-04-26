import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import { IMG_URL } from "../utils/constant";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  const categories =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="rest-menu">
      <h1 className="text-center font-extrabold">{name}</h1>
      <h2 className="text-center my-3 font-bold">{cuisines.join(", ")}</h2>
      <h3 className="text-center my-3 font-semibold">{costForTwoMessage}</h3>
      <ul>
        {/* {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            <div className="dish">
              <div className="dish-name">
                <h3>{item?.card?.info?.name}</h3>
              </div>
            </div>
          </li>
        ))} */}

        {categories.map((item, index) => (
          <li>
            <div className="dish">
              <div className="dish-name">
                <ResCategory
                  key={item?.card?.card?.title}
                  data={item}
                  showItems={index === showIndex ? true : false} 
                  setShowIndex={() => setShowIndex(index)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenu;
