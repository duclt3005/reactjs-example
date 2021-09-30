//  a higher order component takes a component and return another component

import React from 'react'
import ReactDOM from "react-dom";
import '../../assets/scss/app.scss'

const Input = ({type, value}) => {
    return (
        <div>
            <input className="form-group" type={type} value={value} />
        </div>
    )
}

const InputHOC =  (Input, typeInput="text") => {
    const input =[
        {
            type: 'text',
            value: 'text'
        },
        {
            type: 'radio',
            value: 'radio'
        },
        {
            type: 'checkbox',
            value: 'checkbox'
        },
        {
            type: 'number',
            value: '0'
        }

    ]

    const {type, value} = input.find(c => { return c.type === typeInput })

    return () => {
        return <Input type={type} value = {value}/>
    }
}

const TextInput = InputHOC(Input);
const RadioInput = InputHOC(Input ,"radio");
const CheckboxInput = InputHOC(Input ,"checkbox");
const NumberInput = InputHOC(Input ,'number');

console.log(TextInput);
class HighOrderComponent extends React.Component
{
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <>
                <h1>High Order Component</h1>
                <TextInput />
                <RadioInput />
                <CheckboxInput />
                <NumberInput />
            </>
        );
    }
}


function App() {
    ReactDOM.render(<HighOrderComponent />, document.getElementById("root"));
}

export default App;