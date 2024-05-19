# React Drill 

# parcel
- dev build
- local server
- HMR - Hot Module Replacement
- file watching algo -- c++
- caching - faster builds
- img optimize
- minification and bundle the code for production
- compress files
- consistent hashing
- code splitting
- Differential bundling
- Tree shaking - remove unused code

# previous code of createElement

<!-- // const heading = React.createElement("h1", {
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

console.log(parent); -->

# of index.html
<!-- <h1>ffffffffffffffffff</h1>
    <div id="root">
      <h1>ffffffffffffffffff</h1> 
        Replaced
    </div>
     <script>
        const heading = document.createElement('h1');
        heading.innerHTML = "Hola !!!";
        const root = document.getElementById('root');
        root.appendChild(heading);
    </script> 

     CDN Links

     <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    >
   </script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    >
   </script> -

  <script type="module" src="./App.js"></script> -->


  <!-- # //react element  - only difference between element and comp is written as function
const heading = <h1 className="head">Hi this is jsx</h1>


const Title = () => (
     <h1>This is title</h1>
);

 # //react functional component
# //component composition
# //using simple curly braces element can also be imported
const HeadingComp = () => {
    return <div className="container">
        <Title />
        {heading}
        <h1 className="head">Hi functional comp</h1>
    </div>
};

  -->


# Redux-toolkit
 - install package
 - build store
 - connect store to app
 - slice(cart)
 - dispatch (action)
 - selector


# settings testing
- installed react testing lib
- install jest
- install babel dependency required in jest
- configured babel
- config parcel to disable default babel config of parcel
- jest config by npx jest --init
-install jsdom
-test is a function in which first arg is the description and second is implementation callback function which first has function call