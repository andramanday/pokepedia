/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

import TogleButton from './togleButton/';
class CompHeader extends Component{

    render(){
        return(
            <header>
                <div className="icon-sidebar">
                    <TogleButton />
                </div>
                <div className="search-input">
                    <input type="text" name="FirstName" />
                </div>
                <div className="icon-left">
                    <a href="http://andra.antarra.tech/">Visitme</a>
                </div>
            </header>
        )
    }

}

export default CompHeader