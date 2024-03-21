import React from 'react'
import User from './User';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center m-4 p-4'>
        <h1 className='font-extrabold text-2xl p-4'>Welcome to Dine Dash</h1>
        <h2 className='p-4 font-semibold text-lg'>Your one stop solution to everyday hunger</h2>

        <User name={"Dash Dine"} location={"Delhi"} />
    </div>
  );
};

export default About