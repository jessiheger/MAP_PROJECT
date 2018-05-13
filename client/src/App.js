import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Footer from './layout/Footer';
import Home from './Home';
import Login from './auth/login';
import Nav from './layout/nav';
import Profile from './Profile';
import Signup from './auth/signup';
import Trip from './Components/trip'
import Worldview from './Components/worldview'


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      user: null,
      trips: null
    }
  }

  componentDidMount = () => {
    console.log('component did mount')
    this.getUser();
  }

  getUser = () => {
    console.log('get user');
    let token = localStorage.getItem('mernToken');
    if(token){
      console.log('token found in LS', token)
      axios.post('/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('SUCCESS!', response);
        this.setState({
          user: response.data.user,
          trips: response.data.user.trips
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      console.log('No token was found')
      localStorage.removeItem('mernToken');
        this.setState({
          user: null
        })
    }
}

refetchData = () => {
  axios.get(`http://localhost:3001/profile/${this.state.user.id}`)
    .then(res => {
      console.log("Sucess fetching data!", res.data.trips);
      this.setState({
        user: res.data.user,
        trips: res.data.trips
      })
    })
    .catch(err => {
      console.log("error", err);
    });
}

  render() {
    return (
      <div className="App">
          <Router> 
            <div className = "container">
              <Nav user={this.state.user} updateUser={this.getUser}/>
              <Route exact path="/" component={Home} /> 
              <Route path="/login" component={
                () => (<Login user={this.state.user} updateUser={this.getUser} />) 
              } /> 
              <Route path="/signup" component={
                () => (<Signup user={this.state.user} updateUser={this.getUser} />) 
              } /> 
              <Route path="/profile" component={
                () => (<Profile user={this.state.user} trips={this.state.trips} reFetchData={this.refetchData}/>)} />
              <Route path="/newtrip" component={
                  () => (<Trip user={this.state.user} reFetchData={this.refetchData} />)} />
              <Route path="/worldview" component={
                () => (<Worldview user={this.state.user} />)} />
            </div>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
