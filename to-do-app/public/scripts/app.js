'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'To-Do App'
    ),
    React.createElement(
        'p',
        null,
        'This is some text'
    )
);
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Svilena Koleva'
    ),
    React.createElement(
        'p',
        null,
        'Age: 31'
    ),
    React.createElement(
        'p',
        null,
        'Location: Copenhagen'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
