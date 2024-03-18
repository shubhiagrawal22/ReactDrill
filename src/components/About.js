import React from 'react'
import User from './User';

const About = () => {
  return (
    <div>
        <h1>Welcome to Dine Dash</h1>
        <h2>Your one stop solution to everyday hunger</h2>

        <User name={"Dash Dine"} location={"Delhi"} />
    </div>
  );
};

export default About