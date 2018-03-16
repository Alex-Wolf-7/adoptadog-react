import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './Router.css';
//Import components as well
import LoginComp from './components/login';
import HomeComp from './components/homeComp';
import KennelComp from './components/kennel';
import AboutComp from './components/about';
import ChecklistComp from './components/checklist'
import AllDoneComp from './components/allDone'
import ApplicationComp from './components/applicationComp';
import AdminHomeVisitComp from './components/adminHomeVisit';
import HomeVisitComp from './components/homeVisit';
import ViewApplicationComp from './components/viewApplicationComp';
import ContactComp from './components/userContact';


class Router extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <LoginComp {...this.props.store.getState()} />} />
          <Route exact path='/home' render={(props) => <HomeComp {...this.props.store.getState()} />} />
          <Route exact path='/kennel' render={(props) => <KennelComp {...this.props.store.getState()} />} />
          <Route exact path='/about-us' render={(props) => <AboutComp {...this.props.store.getState()} />} />
          <Route exact path='/checklist' render={(props) => <ChecklistComp {...this.props.store.getState()} />} />
          <Route exact path='/all-done' render={(props) => <AllDoneComp {...this.props.store.getState()} />} />
          <Route exact path='/application' render={(props) => <ApplicationComp {...this.props.store.getState()} />} />
          <Route exact path='/admin-home-visit' render={(props) => <AdminHomeVisitComp {...this.props.store.getState()} />} />
          <Route exact path='/homeVisit' render={(props) => <HomeVisitComp {...this.props.store.getState()} />} />
          <Route exact path='/viewApplication' render={(props) => <ViewApplicationComp {...this.props.store.getState()} />} />
          <Route exact path='/contact' render={(props) => <ContactComp {...this.props.store.getState()} />} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
