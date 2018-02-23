console.log('App.js is running!');

//JSX - JavaScript XML
var template = ( 
    <div>
        <h1>To-Do App</h1>  
        <p>This is some text</p>
    </div>
);
var templateTwo = (
    <div>
        <h1>Svilena Koleva</h1>
        <p>Age: 31</p>
        <p>Location: Copenhagen</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
