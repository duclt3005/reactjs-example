import React from "react";
import ReactDOM from "react-dom";
import '../../assets/scss/form.scss'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            birth: "",
            phone: "",
            gender: "0",
            option: 0,
            avatar: ""
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        let {name, email, dateOfBirth, phone, gender, option, avatar} = this.state;
        return (
            <div className="controlled col-5">
                <h2 className="mb-3">Controlled Component</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-group flex-nowrap mb-3">
                        <label htmlFor="name" className="input-group-text">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            id="name"
                            name="name"
                            onChange={this.handleChange}/>
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <label htmlFor="email" className="input-group-text">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            id="email"
                            name="email"
                            onChange={this.handleChange}/>
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <label htmlFor="birth" className="input-group-text">Data of birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="birth"
                            value={dateOfBirth}
                            name="birth"
                            onChange={this.handleChange}/>
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <label htmlFor="phone" className="input-group-text">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone"
                            id="phone"
                            value={phone}
                            name="phone"
                            onChange={this.handleChange}/>
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <label htmlFor="phone" className="input-group-text">Gender</label>
                        <div className="row col-8 ms-3 d-flex align-items-center ">
                            <div className="form-check col-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="gender1"
                                    value="0"
                                    checked={gender === "0"}
                                    onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="gender1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check col-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="1"
                                    id="gender2"
                                    checked={gender === "1"}
                                    onChange={this.handleChange}
                                    />
                                <label className="form-check-label" htmlFor="gender2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <label htmlFor="option" className="input-group-text">Option</label>
                        <select
                            className="form-select"
                            id="option"
                            name="option"
                            value={option}
                            onChange={this.handleChange}>
                            <option value = "0">Open this select menu</option>
                            <option value = "1">One</option>
                            <option value = "2">Two</option>
                            <option value = "3">Three</option>
                        </select>
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <input
                            className="form-control"
                            type="file"
                            id="avatar"
                            name="avatar"
                            value={avatar}
                            onChange={this.handleChange}/>
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        );
    }
}

function App() {
    ReactDOM.render(<Form />, document.getElementById("root"));
}

export default App;