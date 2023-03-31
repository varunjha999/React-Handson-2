import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  //Golden rule : State can only be changed using setState
  state = {
    //key : value
    Name1: "",
    Department: "",
    Rating: "",
    employees: [],
  };
  changeHandler = (e) => {
    // e : represents the Event
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.type);
    console.log(e.target.name + " : " + e.target.value);
    // console.log("changeHandler called");
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitHandler = (e) => {
    //console.log(e.target); // e.target : represents the element that triggered the event
    e.preventDefault();
    // To prevent the default behaviour of the button
    console.log("submitHandler called");
    const empObj = {
      Name: this.state.Name1,
      Department: this.state.Department,
      Rating: this.state.Rating,
    };
    const arr = this.state.employees;
    arr.push(empObj);
    this.setState({ employees: arr });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">EMPLOYEE FEEDBACK FORM</h1>
        <form>
          <label className="name">Name : </label>
          <input
            placeholder="Enter your name"
            type="text"
            name="Name1"
            // value={this.state.Name1}
            onChange={this.changeHandler}
          ></input>
          <br />
          <label className="dept">Department : </label>
          <input
            placeholder="Enter your department"
            type="text"
            name="Department"
            // value={this.state.Department}
            onChange={this.changeHandler}
          ></input>
          <br />
          <label className="ratg">Rating : </label>
          <input
            placeholder="Enter your rating"
            type="number"
            name="Rating"
            // value={this.state.Rating}
            onChange={this.changeHandler}
          ></input>
          <br />
          <br />
          <button
            className="btn btn-warning"
            /*type="button"*/ onClick={this.submitHandler}
          >
            Submit
          </button>
          {/*HTML Button is of type SUBMIT*/}
        </form>
        <div className="mainbox container">
          {this.state.employees.map((value, index) => {
            return (
              <span key={index} className="container box1">
                <span>
                  Name : {value.Name} | Department : {value.Department} | Rating
                  : {value.Rating}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
