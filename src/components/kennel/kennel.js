import React, { Component } from 'react';
import './kennel.css';
import Header from '../Header/Header.js'
import { withRouter } from 'react-router-dom'
import { adminOrUser } from "../authenticate.js"
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class kennelPage extends Component {
  constructor(props){
    super(props);
    this.loadImage = this.loadImage.bind(this);
    this.state = {
      dogImg: ""
    }
  }

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
                <img src={this.state.dogImg} className="kennelimg" alt=""/>
                <p>This is some test text.</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={this.state.dogImg} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={this.state.dogImg} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={this.state.dogImg} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>

            <div className="kennel-card kennelrow no-width no-spacing flex-down">
                <img src={this.state.dogImg} className="kennelimg" alt=""/>
                <p>This is some test text</p>
            </div>
        </div>
    </div>
    </div>
  );
    }

    componentDidMount() {
      this.loadImage();
    }

    loadImage() {
      //this is the crappy way of doing it imo, but whatever it's here if TA's want it (It's slower)
      // let xhttp = new XMLHttpRequest();
      let state = this;
      // xhttp.onreadystatechange = function() {
      //   if(this.readyState === 4 && this.status === 200) {
      //     console.log(this);
      //     state.setState({
      //         dogImg: this.responseText
      //     });
      //     console.log(state);
      //   }
      // };
      // xhttp.open("GET", '/images/dogImage.txt', true);
      // xhttp.responseType = 'text';
      //
      // xhttp.send();

      //Another way of doing it. I like it more, it's more standard
      fetch('/images/dogImage.txt').then(function(response) {
        response.text().then(function(text) {
          console.log(text);
          state.setState({dogImg: text});
        });
      });
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
