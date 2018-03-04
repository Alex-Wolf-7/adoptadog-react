import React from 'react';
import './home.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import dog from "./sampleDog1.jpg";
import { userOnly } from "../authenticate.js";


class homeComp extends React.Component {


  constructor(props) {
      super(props);
      this.updateNextPage = this.updateNextPage.bind(this);
      this.state = {
        appStatus: localStorage.getItem("applicationStatus"),
        discussStatus: localStorage.getItem("discussionStatus"),
        homeCheckStatus: localStorage.getItem("homeCheckStatus"),
        finalStatus: localStorage.getItem("finalStatus"),
      }
    }

  render() {
    return (
      <div>
      <Header></Header>
      <div className="row bordered grey taller halfHeight">
        <span className="spacer1 homeSpan"></span>
        <span className="homeSpan">Next to do:</span>
        <span className="spacer1 homeSpan"></span>
        <span className="homeSpan" id="todo-tasks" onChange={this.updateSteps}>Step #1 - Fill Out The Adoption Form</span>
        <span className="spacer3 homeSpan"></span>
        <button type="button" id="next-task-button">Do it</button>
        <span className="spacer1 homeSpan"></span>
    </div>

    <div className="row bordered grey left halfHeight">
        <div className="row noSpacing">
            <span className="spacer1 homeSpan"></span>
            <h4 className="homeH4">Recent Rescues: </h4>
            <span className="spacer3 homeSpan"></span>
            <span className="spacer1 homeSpan"></span>
        </div>
        <div className="row noSpacing">
            <div className="row noWidth noSpacing flexDown">
                <img src={dog} className="homeimg" alt=""/>
                <p>This is some test text</p>
            </div>
            <div className="row noWidth noSpacing flexDown">
                <img src={dog} className="homeimg" alt=""/>
                <p>This is some test text</p>
            </div>
        </div>
    </div>
    </div>


    );
  }
    componentWillMount() {
      userOnly();

      if(this.state.appStatus === null) {
        this.setState({appStatus: "notReady"});
      }

      if(this.state.discussStatus === null) {
        this.setState({discussStatus: "notReady"});
      }

      if(this.state.homeCheckStatus === null) {
        this.setState({homeCheckStatus: "notReady"});
      }

      if(this.state.finalStatus === null) {
        this.setState({finalStatus: "notReady"});
      }
    }

    componentDidMount() {
      this.updateSteps();
      document.getElementById("next-task-button").addEventListener("click", this.updateNextPage);
    }

    updateSteps () {
      const todoTask = document.getElementById("todo-tasks");

      if (this.state.appStatus === "notReady" || this.state.appStatus === "Submitted") {
        todoTask.innerHTML = "Step #1 - Fill Out The Adoption Form";
      }
      else if (this.state.appStatus === "Completed" && (this.state.discussStatus === "notReady" || this.state.discussStatus === "Submitted")) {
        todoTask.innerHTML = "Step #2 - Contact Dog Animal Rescue Adoption Coordinator";
      }
      else if (this.state.discussStatus === "Completed" && (this.state.homeCheckStatus === "notReady" || this.state.homeCheckStatus === "Submitted")) {
        todoTask.innerHTML = "Step #3 - Schedule Your Home Check";
      }
      else if (this.state.homeCheckStatus === "Completed") {
        todoTask.innerHTML = "Go Get Your New Dog Friend!";
      }
      else if (this.state.finalStatus === "Completed") {
        todoTask.innerHTML = "Go Get Your New Dog Friend!";
      }
    }

    updateNextPage () {
      if (this.state.appStatus === "notReady" || this.state.appStatus === "Submitted") {
        this.props.history.push('/application');
      }
      else if (this.state.appStatus === "Completed" && (this.state.discussStatus === "notReady" || this.state.discussStatus === "Submitted")) {
        this.props.history.push('/contact');
      }
      else if (this.state.discussStatus === "Completed" && (this.state.homeCheckStatus === "notReady" || this.state.homeCheckStatus === "Submitted")) {
        this.props.history.push('/home-visit');
      }
      else if (this.state.homeCheckStatus === "Completed") {
        this.props.history.push('/all-done');
      }
      else if (this.state.finalStatus === "Completed") {
        this.props.history.push('/all-done');
      }
    }

  }
  export default withRouter(homeComp);
