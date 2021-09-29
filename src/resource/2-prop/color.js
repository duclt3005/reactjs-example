import React from 'react'
import ReactDOM from 'react-dom'
import '../../assets/scss/color.scss'

function createColor() {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}
function ColorTag(prop) {
    return <div style={prop.bg}>{prop.bg.backgroundColor}</div>
}
function show(){
    alert("change color");
}
function Color() {
    let colorArray = new Array(6);
    for (let i = 0; i < 6; i++) {
        colorArray.push(< ColorTag key={i} bg={{backgroundColor: createColor()}} />);
    }
    return (
        <div className="color">
            {colorArray}
            <button onClick={show}>Change Color</button>
        </div>
    )
}


function App() {
    return (
        <div className="App">
            <Color />
        </div>
    );
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default Color;