import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_API } from "../utils/constant";

const RestMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(REST_API + resId);

    const json = await data.json();
    setRestInfo(json);
    //  console.log(json);
  };

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, id } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="rest-menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            <div className="dish">
              <div className="dish-name">
                <h3>{item.card.info.name}</h3>
              </div>
              <div className="dish-img">img</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenu;
