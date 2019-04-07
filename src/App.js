import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {increment,incrementAsync} from './actions/counter';
import {fetchUsers} from './actions/users';


class App extends Component {
  onClick=() => {
   this.props.increment()
  }
  onClickAsync= ()=> {
    this.props.incrementAsync()
  }
  fetchUsers= () => {
    this.props.fetchUsers()
  }
  render() {
    // const {num} = this.state;
    const {isFetching,error,users} = this.props.users
    let data;
    if(error){
      data = error
    }else if(isFetching) {
      data = "Loading..."
    } else {
      data = users && users.data[0].name
      // data = users && users.data[0].name
    }
    return (
      <div className="App">
  {this.props.counter}
  <button onClick={this.onClick}>+</button>
  <br/> 
  <button onClick={this.onClickAsync}>async+</button>   <br/> 
  <button onClick={this.fetchUsers}>Get users</button>  <br/>
  {data}
      </div>
    );
  }
}
const mapStateToProps= (state) => {
  return {
    counter:state.counter,
    users:state.users
  }
}
export default connect(mapStateToProps,{increment,incrementAsync,fetchUsers})(App);
