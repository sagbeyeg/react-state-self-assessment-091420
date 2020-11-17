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
    <div className="app">
      <span className="display">
        <h1>You Can Do This!</h1>
      
        <img onClick={this.clickHandler} src={this.state.clicked ? yes["yes-image"] : no["no-image"]} alt={this.state.clicked ? 'yes-image' : 'no-image'} />

        {this.state.clicked ? (<h1 className="display">{yes["yes-statement"]}</h1>) : (<h1 className="display">{no["no-statement"]}</h1>)}
      </span>
    </div>
    )
  } 
}

export default App;
