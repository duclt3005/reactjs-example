import React from "react";
import ReactDOM from "react-dom";

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

class ClockClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        // <Clock date={new Date()} />,
        <ClockClass />,
        document.getElementById("root")
    );
}

function App() {
    setInterval(tick, 1000);
}


export default App;
