import React from 'react'
import { IMG_URL } from '../utils/constant';

const RestCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info

    return (
        <div className="card">
            <div className="card-img">
                <img src={IMG_URL + cloudinaryImageId} alt="img" />
            </div>
            <div className="card-name">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} star</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>
        </div>
    );
};

export default RestCard;