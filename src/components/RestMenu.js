import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";

const RestMenu = () => {

  const { resId } = useParams();
  const restInfo = useRestMenu(resId);

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
