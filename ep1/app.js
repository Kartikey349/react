const h1 = React.createElement(
    "h1", 
    {id : "heading"},
    "Hello world from react"
);

console.log(h1) //this will return obj to you

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1); //take the createElement obj then create that tag which browser understand and then render it to root
