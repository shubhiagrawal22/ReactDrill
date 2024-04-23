import React from "react";
import UserContext from "../utils/UserContext";

class User extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="user-details">
                <h1> Name : {this.props.name}</h1>
                <h3> Location : {this.props.location}</h3>
                <div>LoggedIn user : 
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <span>{loggedInUser}</span>}
                    </UserContext.Consumer>
                </div>
            </div>
        );
    }
}

export default User;