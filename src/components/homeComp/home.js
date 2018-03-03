import React, { Component } from 'react';
import './home.css';
import { withRouter } from 'react-router-dom';
import ClientHeader from '../ClientHeader/ClientHeader.js';

class homeComp extends React.Component {

  render() {
    return (
      <div>
      <ClientHeader></ClientHeader>
      <div className="row bordered grey taller">
        <span className="spacer1 homeSpan"></span>
        <span className="homeSpan">Next to do:</span>
        <span className="spacer1 homeSpan"></span>
        <span className="homeSpan" id="todo-tasks" onChange="updateSteps">Step #1 - Fill Out The Adoption Form</span>
        <span className="spacer3 homeSpan"></span>
        <button type="button" id="next-task-button">Do it</button>
        <span className="spacer1 homeSpan"></span>
    </div>

    <div className="row bordered grey left">
        <div className="row noSpacing">
            <span className="spacer1 homeSpan"></span>
            <h4 className="homeH4">Recent Rescues: </h4>
            <span className="spacer3 homeSpan"></span>
            <span className="spacer1 homeSpan"></span>
        </div>
        <div className="row noSpacing">
            <div className="row noWidth noSpacing flexDown">
                <img src="images/sampleDog1.jpg" alt=""/>
                <p>This is some test text</p>
            </div>
            <div className="row noWidth noSpacing flexDown">
                <img src="./sampleDog1.jpg" alt=""/>
                <p>This is some test text</p>
            </div>
        </div>
    </div>
    </div>


    );

    function componentDidMount() {
      updateSteps ();
      document.getElementById("next-task-button").addEventListener("click", updateNextPage);
    }

    function updateSteps () {
      var appStatus = localStorage.getItem("applicationStatus");
      var discussStatus = localStorage.getItem("discussionStatus");
      var homeCheckStatus = localStorage.getItem("homeCheckStatus");
      var finalStatus = localStorage.getItem("finalStatus");
      var todoTask = document.getElementById("todo-tasks");

      if (appStatus === "notReady" || appStatus === "Submitted") {
        todoTask.innerHTML = "Step #1 - Fill Out The Adoption Form";
      }
      else if (appStatus === "Completed" && (discussStatus === "notReady" || discussStatus === "Submitted")) {
        todoTask.innerHTML = "Step #2 - Contact Dog Animal Rescue Adoption Coordinator";
      }
      else if (discussStatus === "Completed" && (homeCheckStatus === "notReady" || homeCheckStatus === "Submitted")) {
        todoTask.innerHTML = "Step #3 - Schedule Your Home Check";
      }
      else if (homeCheckStatus === "Completed") {
        todoTask.innerHTML = "Go Get Your New Dog Friend!";
      }
      else if (finalStatus === "Completed") {
        todoTask.innerHTML = "Go Get Your New Dog Friend!";
      }
    }

    function updateNextPage () {
      var appStatus = localStorage.getItem("applicationStatus");
      var discussStatus = localStorage.getItem("discussionStatus");
      var homeCheckStatus = localStorage.getItem("homeCheckStatus");
      var finalStatus = localStorage.getItem("finalStatus");

      if (appStatus === "notReady" || appStatus === "Submitted") {
        window.location = 'application-form.html';
      }
      else if (appStatus === "Completed" && (discussStatus === "notReady" || discussStatus === "Submitted")) {
        window.location = 'contact-page.html';
      }
      else if (discussStatus === "Completed" && (homeCheckStatus === "notReady" || homeCheckStatus === "Submitted")) {
        window.location = 'home-visit.html';
      }
      else if (homeCheckStatus === "Completed") {
        window.location = 'all-done.html';
      }
      else if (finalStatus === "Completed") {
        window.location = 'all-done.html';
      }
    }

  }

}
export default withRouter(homeComp);
