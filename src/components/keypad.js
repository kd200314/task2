import React, { Component } from 'react';

class Keypad extends Component { 
  render() {
    return (
      <div className="button">
  
        <button onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button onClick={e => this.props.onClick(e.target.name)}>⌫</button><br/>


        <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button name="-" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>

        <button onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button onClick={e => this.props.onClick(e.target.name)}>-</button><br/>


        <button onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button onClick={e => this.props.onClick(e.target.name)}>=</button>
        <button onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
      </div>
    )
  }
}

export default Keypad;