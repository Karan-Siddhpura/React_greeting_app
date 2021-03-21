import React from 'react';

const App = () => {
    let date = new Date(2021,3,4,1);
    date = date.getHours();
    let greeting;
    const cssStyle = {};
    if (date >= 1 && date < 12) {
        greeting = "Good Morning";
        cssStyle.color = "lightgreen";
    }
    else if (date >= 12 && date < 19) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange"
    }
    else {
        greeting = "Good Night";
        cssStyle.color = "black";
    }
    return (
        <div>
            <h1>Hello Sir, <span style={cssStyle}>{greeting}</span>
            </h1>
        </div>
    );
}
export default App;