<<<<<<< HEAD
/** --For this structure--
 * <div id = "heading"></div>
 */

const heading = React.createElement("h1", {}, "Hello world from React!!!");

const root = ReactDOM.createRoot(document.getElementById("heading"));

root.render(heading);

/**  --For this structure--
 * <div id = "parent">
 *      <div id = "child">
 *          <h1></h1>
 *      </div>
 * </div>
 *
 * (React.createElement) is an Object => HTML that Browser understands
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello from nested div"),
  ),
);
const root2 = ReactDOM.createRoot(
  document.getElementById("parent" /* or "child" */),
);
root2.render(parent);

/**  --For this structure--
 * <div id = "parent">
 *      <div id = "child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 *
 *    we use the third attribute of React.createElement("which tag",Object,[array of childerns])
 */

const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from nested div of h1"),
    React.createElement("h2", {}, "Hello from nested div of h2"),
  ]),
);
const root3 = ReactDOM.createRoot(
  document.getElementById("parent2" /* or "child" */),
);
root3.render(parent2);
=======
/* global React, ReactDOM */
 
const heading = React.createElement
    ("h1", {id: "heading"}, 
    React.createElement("div", {id: "carrer"},
        React.createElement("h1", {}, "H1 tag here"),
        React.createElement("h2", {}, "H2 tag here")
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
>>>>>>> 9b3ae7cdae42d6cf0567d21c0c75f558ca31ac9c
