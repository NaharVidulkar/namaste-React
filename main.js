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