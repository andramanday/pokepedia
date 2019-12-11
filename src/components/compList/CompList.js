/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Img from 'react-image'

import imgLoader from '../../assets/img/imgLoader.gif'


class CompList extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
        super(props);
  }
    
  componentDidMount() {
      if (!this.props.pokemons) {
        this.props.getPokemon()
      }
      console.log(this.props.catchs)
  }

  getLocation(href){
    let l = document.createElement("a");
    l.href = href;
    return l;
  }

  render(){
      const { pokemons, next, previous } = this.props
      const { getLocation } = this
      let getPrevlocation = getLocation(previous).pathname+getLocation(previous).search
      let getNextlocation = getLocation(next).pathname+getLocation(next).search
      return(
          <div className="content-wrapper">
          <div className="contentHeader">
            <button className="btn-prev" onClick={() => this.props.getPrevNext(getPrevlocation)}>&#171;Prev</button>
            <div className="headDesc">
              <h1>Pokepedia</h1>
              <h3>Tokopedia test</h3>
            </div>
            <button className="brn-next" onClick={() => this.props.getPrevNext(getNextlocation)}>Next&#187;</button>
          </div>
          <div className="listWrapper">
          {pokemons && pokemons.map((p, index) =>
          <Link to={`/detail/${getLocation(p.url).pathname.split("/").slice(4)[0]}`} key={index}>
            <div className="listItem" >
            {p.url.pathname}
              <h1>{p.name}</h1>
              <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getLocation(p.url).pathname.split("/").slice(4)[0]}.png`} 
              loader={<img src={imgLoader} width="100%"/>}
              className="pokeImg"/>
            </div>
          </Link>
          )}
          </div>
      </div>
      )
    }
} 

export default CompList