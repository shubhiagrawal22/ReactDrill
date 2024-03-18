import React from "react";

class User extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="user-details">
                <h1> Name : {this.props.name}</h1>
                <h3> Location : {this.props.location}</h3>
            </div>
        );
    }
}

export default User;