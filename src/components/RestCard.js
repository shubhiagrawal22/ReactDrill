import React from 'react'
import { IMG_URL } from '../utils/constant';

const RestCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info

    return (
        <div className="card m-4 p-4 w-[20%] rounded-lg bg-gray-200 hover:bg-gray-300">
            <div className="card-img">
                <img className="rounded-lg w-[100%] h-[200px]" src={IMG_URL + cloudinaryImageId} alt="img" />
            </div>
            <div className="card-name p-2">
                <h2 className='font-bold text-lg'>{name}</h2>
                <h4 className='font-medium'>{cuisines.join(", ")}</h4>
                <h4>{avgRating} star</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>
        </div>
    );
};

export default RestCard;