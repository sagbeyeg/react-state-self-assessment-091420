import React from 'react';
import { yes, no } from "../objects";

class Response extends React.Component {
  
  state = {
    clicked: false,
    yes,
    no
  }

  clickHandler = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
  }

  render() {
    return (
    <div className="app">
      <span className="display">
      {this.state.clicked ? (<h1 className="display">{yes["yes-statement"]}</h1>) : (<h1 className="display">{no["no-statement"]}</h1>)}
        <img onClick={this.clickHandler} src={this.state.clicked ? yes["yes-image"] : no["no-image"]} alt={this.state.clicked ? 'yes-image' : 'no-image'} />
      </span>
    </div>
    )
  } 
}

export default Response