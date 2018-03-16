import React, { Component } from 'react';
import './kennel.css';
import Header from '../Header/Header.js'
import { withRouter } from 'react-router-dom'
import dog from "./sampleDog1.jpg"
import { adminOrUser } from "../authenticate.js"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class kennelPage extends Component {
  componentWillMount () {
    adminOrUser(this.props.clearance);
  }

  render() {
    return (
      <div>
      <Header/>
    <div className="kennelrow marginLeftFive smaller bordered grey">
        <div className="kennelrow smaller">
            <span className="spacer1"></span>
            <h3 className="kennelh3">Kennel:</h3>
            <span className="spacer4"></span>
        </div>
        <div className="kennelrow no-margin-left smaller">
            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={dog} className="kennelimg" alt=""/>
                <p>This is some test text.</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={dog} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={dog} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={dog} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={dog} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>
        </div>
    </div>
    </div>
  );
    }

}

kennelPage.propTypes = {
  clearance: PropTypes.string
};


function mapStateToProps(state) {
  return {
    clearance: state.clearance
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(kennelPage));
