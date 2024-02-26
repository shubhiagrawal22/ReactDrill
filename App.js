import React from "react";
import ReactDOM from "react-dom/client";



// const heading = React.createElement("h1", {
//     id : "heading",
//     xyz : "abc",
// }, "Hola");

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "hi this is h1")
//   )
// );

//SIBLING

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hi ReactDrill"),
    React.createElement("h2", { id: "heading" }, "hi this is h2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);

console.log(parent);
