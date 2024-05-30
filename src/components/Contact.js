import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-4 m-4">
      <h1 className="p-2 text-2xl font-bold">Contact Us</h1>
      <form className="col-6 mx-auto m-4 flex flex-col justify-center">
        <input
          type="text"
          placeholder="Name"
          className="block p-2 m-2 w-[100%] bg-slate-100 text-black border border-black"
        />
        <input
          type="text"
          placeholder="Email"
          className="block p-2 m-2 w-[100%] bg-slate-100 text-black border border-black"
        />
        <button className="p-2 m-2 bg-slate-400 rounded-lg border border-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
