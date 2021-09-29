import React from "react";
import ReactDOM from "react-dom";
import '../../assets/scss/world.scss'

const POPULATION = 8000000000;
const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
]

let populationArr = tenHighestPopulation.map((e)=>{
    return <div className="city">
        <div className="city_name">{e.country}</div>
        <div className="city_bar">
            <div className="city_bar-value" style={{width: (e.population * 100/ POPULATION ) + "%"}}></div>
        </div>
        <div className="city_value">{e.population}</div>
    </div>
})

function World() {
    return (
        <div className="world">
            <h1>World Population</h1>
            <div className="world_city">
                {populationArr}
            </div>
        </div>
    )
}

function App() {
    ReactDOM.render(<World />, document.getElementById("root"));
}

export default App;