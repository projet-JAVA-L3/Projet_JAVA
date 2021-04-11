import React from "react";

export default class signin extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
        <form>
            <div>
                <input
                type="email"
                name="email"
                placeholder="email"
                onChange={this.handleChange}/>
            </div>
            <div>
                <input
                type="password"
                name="password"
                placeholder="passeword"
                onChange={this.handleChange}/>
            </div>
            <button type="submit">submit</button>
        </form>
    );
  }
}
