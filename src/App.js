import React from 'react';
import './App.css';
import { yes, no } from "./objects";
class App extends React.Component {
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
  }


  render() {
    return (
    <div>
      <span className="header">
        <h1>You Can Do This!</h1>
      </span>
      <span className="response">
        <img onClick={this.clickHandler} src={this.state.clicked ? yes["yes-image"] : no["no-image"]} alt={this.state.clicked ? 'yes-image' : 'no-image'} />
        {this.state.clicked ? (<h1>{yes["yes-statement"]}</h1>) : (<h1>{no["no-statement"]}</h1>)}
      </span>
    </div>
    )
  } 
}

export default App;
