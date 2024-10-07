import React from "react";
import ReactDom from "react-dom/client";



/*
const parent = React.createElement("div", {id : "parent"}, React.createElement("div", {id: "child"}, 
    React.createElement("h1", {}, "I'm h1 tag")
)); //-----> in case of single children
*/

/*
const parent = React.createElement("div", {id : "parent"}, React.createElement("div", {id: "child"}, 
    [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
));  //----> for multiple child we can put all of them in an array
*/


const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "this is namaste react"), 
    React.createElement("h2", {}, "I'm h2 tag")]
),
    React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I'm h1 tag"), 
    React.createElement("h2", {}, "I'm h2 tag")]
)]
);


const h1 = React.createElement( //createElement is object
    "h1", 
    {id : "heading"},
    "Hello world from react"
);

console.log(parent) //this will return obj to you

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(parent); // * take the createElement obj then create that tag which browser understand and then render it to root.  * replaces the content inside the html root not append  * this will only render inside the "root" div not the entire html
