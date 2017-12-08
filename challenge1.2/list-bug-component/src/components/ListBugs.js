import React from "react";
import BaseComponent from './BaseComponent.js'
import uuid from 'uuid';

class ListBugs extends BaseComponent{
  constructor(props){
    super(props);
    
    this.state = {
      bugs: [{"id":"123","status":"Open", "priority": "High", "owner": "Cesar Smith", "description": "I sure, it was working on my machine"}]
    }
  }

  componentDidMount(){
    const newState = { bugs: document.__INITIALSTATE__ }
    this.setState(newState)
    console.log(this.state.bugs);
    //console.log(this.state.bugs);
    //let currentState = this.state;
    //currentState.bugs.push(this.props.bug);
  }

  render() {
    const body = this.state.bugs.map((b) =>
      <tr key={b.id}>
        <td>{b.id}</td>
        <td>{b.status}</td>
        <td>{b.priority}</td>
        <td>{b.owner}</td>
        <td>{b.description}</td>
      </tr>
    );
    
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    );
  }
}

ListBugs.propTypes = {
};

export default ListBugs;