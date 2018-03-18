import React from 'react';
import './home.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import dog from "./sampleDog1.jpg";
import { userOnly } from "../authenticate.js";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as chatActions from '../../actions/chatActions';

class homeComp extends React.Component {


  constructor(props) {
    super(props);
    this.updateNextPage = this.updateNextPage.bind(this);
  }

  render() {
    return (
      <div>
      <Header/>
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
      userOnly(this.props.clearance);
    }

    componentDidMount() {
      this.updateSteps();
      document.getElementById("next-task-button").addEventListener("click", this.updateNextPage);
    }

    updateSteps () {
      const todoTask = document.getElementById("todo-tasks");

      if (this.props.statuses.applicationStatus === "Not Complete" || this.props.statuses.applicationStatus === "Submitted") {
        todoTask.innerHTML = "Step #1 - Fill Out The Adoption Form";
      }
      else if (this.props.statuses.applicationStatus === "Completed" &&
                (this.props.statuses.discussStatus === "Not Complete" ||
                this.props.statuses.discussStatus === "Submitted")) {
                  todoTask.innerHTML = "Step #2 - Contact Dog Animal Rescue Adoption Coordinator";
      }
      else if (this.props.statuses.discussStatus === "Completed" &&
                (this.props.statuses.homeCheckStatus === "Not Complete"
                || this.props.statuses.homeCheckStatus === "Submitted")) {
        todoTask.innerHTML = "Step #3 - Schedule Your Home Check";
      }
      else if (this.props.statuses.homeCheckStatus === "Completed") {
        todoTask.innerHTML = "Go Get Your New Dog Friend!";
      }
      else if (this.props.statuses.finalStatus === "Completed") {
        todoTask.innerHTML = "Go Get Your New Dog Friend!";
      }
    }

    updateNextPage () {
      if (this.props.statuses.applicationStatus === "Not Complete" || this.props.statuses.applicationStatus === "Submitted") {
        this.props.history.push('/application');
      }
      else if (this.props.statuses.applicationStatus === "Completed" &&
                (this.props.statuses.discussStatus === "Not Complete"
                || this.props.statuses.discussStatus === "Submitted")) {
        this.props.history.push('/contact');
      }
      else if (this.props.statuses.discussStatus === "Completed" &&
                (this.props.statuses.homeCheckStatus === "Not Complete"
                || this.props.statuses.homeCheckStatus === "Submitted")) {
        this.props.history.push('/home-visit');
      }
      else if (this.props.statuses.homeCheckStatus === "Completed") {
        this.props.history.push('/all-done');
      }
      else if (this.props.statuses.finalStatus === "Completed") {
        this.props.history.push('/all-done');
      }
    }

  }
  homeComp.propTypes = {
    chatActions: PropTypes.object,
    chatLog: PropTypes.array,
    clearance: PropTypes.string
  };


  function mapStateToProps(state) {
    return {
      clearance: state.clearance
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      chatActions: bindActionCreators(chatActions, dispatch),
    };
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(homeComp));
