import React, { Component } from 'react';
import './kennel.css';
import ClientHeader from '../ClientHeader/ClientHeader.js'
import { withRouter } from 'react-router-dom'
import dog from "./sampleDog1.jpg"
class kennelPage extends Component {

  render() {
    return (
      <div>
      <ClientHeader></ClientHeader>
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
export default withRouter(kennelPage);
