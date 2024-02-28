import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const resObj = [
    {
      name: "Tasty Bites",
      cuisines: ["Italian", "Mediterranean"],
      avgRating: 4.5,
      costForTwo: 40,
      deliveryTime: 30,
      imgUrl: "https://example.com/tasty_bites.jpg"
    },
    {
      name: "Spice Haven",
      cuisines: ["Indian", "Asian"],
      avgRating: 4.2,
      costForTwo: 35,
      deliveryTime: 45,
      imgUrl: "https://example.com/spice_haven.jpg"
    },
    {
      name: "Grill Master",
      cuisines: ["American", "Barbecue"],
      avgRating: 4.8,
      costForTwo: 50,
      deliveryTime: 40,
      imgUrl: "https://example.com/grill_master.jpg"
    },
    {
      name: "Sushi Delight",
      cuisines: ["Japanese", "Sushi"],
      avgRating: 4.6,
      costForTwo: 45,
      deliveryTime: 35,
      imgUrl: "https://example.com/sushi_delight.jpg"
    },
    {
      name: "Mexican Fiesta",
      cuisines: ["Mexican", "Tex-Mex"],
      avgRating: 4.3,
      costForTwo: 38,
      deliveryTime: 50,
      imgUrl: "https://example.com/mexican_fiesta.jpg"
    },
    {
      name: "Cafe Royale",
      cuisines: ["European", "Coffee"],
      avgRating: 4.7,
      costForTwo: 30,
      deliveryTime: 25,
      imgUrl: "https://example.com/cafe_royale.jpg"
    },
    {
      name: "Veggie Delight",
      cuisines: ["Vegetarian", "Healthy"],
      avgRating: 4.4,
      costForTwo: 32,
      deliveryTime: 40,
      imgUrl: "https://example.com/veggie_delight.jpg"
    },
    {
      name: "Seafood Paradise",
      cuisines: ["Seafood", "Cajun"],
      avgRating: 4.9,
      costForTwo: 55,
      deliveryTime: 35,
      imgUrl: "https://example.com/seafood_paradise.jpg"
    },
    {
      name: "Pasta Palace",
      cuisines: ["Italian", "Pasta"],
      avgRating: 4.5,
      costForTwo: 42,
      deliveryTime: 30,
      imgUrl: "https://example.com/pasta_palace.jpg"
    },
    {
      name: "Healthy Bites",
      cuisines: ["Salads", "Smoothies"],
      avgRating: 4.2,
      costForTwo: 28,
      deliveryTime: 25,
      imgUrl: "https://example.com/healthy_bites.jpg"
    }
  ]  ;

const RestCard = (props) => {

    const { resData } = props;

    return (
        <div className="card">
            <div className="card-img">
                <img src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg" alt="img" />
            </div>
            <div className="card-name">
                <h3>{resData.name}</h3>
                <h4>{resData.cuisines.join(", ")}</h4>
                <h4>{resData.avgRating} star</h4>
                <h4>{resData.costForTwo}INR for two</h4>
                <h4>{resData.deliveryTime}</h4>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="rest-card">
            <RestCard resData = {resObj[2]} />
            </div>

        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
