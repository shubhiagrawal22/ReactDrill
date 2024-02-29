import React from 'react'

const RestCard = (props) => {

    const { resData } = props;

    return (
        <div className="card">
            <div className="card-img">
                <img src={resData.imgUrl} alt="img" />
            </div>
            <div className="card-name">
                <h3>{resData.name}</h3>
                <h4>{resData.cuisines.join(", ")}</h4>
                <h4>{resData.avgRating} star</h4>
                <h4>{resData.costForTwo} INR for two</h4>
                <h4>{resData.deliveryTime}</h4>
            </div>
        </div>
    );
};

export default RestCard;