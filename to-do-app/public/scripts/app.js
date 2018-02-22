console.log('App.js is running!');

//JSX - JavaScript XML
//var template =  <p>This is JSX from App.js!</p>;

var template = React.createElement(
    "h1",
    { id: "someid" }, //attributes object, will be null if no id defined
    "This is sample txt."
  ); 
  //babel generated JS from>> var template = <h1 id="someid">This is shit!</h1>
 
  
var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);
