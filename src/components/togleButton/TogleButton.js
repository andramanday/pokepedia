import React, { Component } from 'react';

import './TogleButton.scss';

class TogleButton extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }

  render(){
    return(
      <button className="toggle-button" onClick={() => this.props.changeSideShow('open')}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
    )
  }
} 

export default TogleButton