/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './CompSidebar.scss'

class CompSidebar extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
            super(props);
    }

    componentDidMount() {
        console.log(this.props.catchs)
    }

    releasePokemon(ids){
        // setPokedex(state => state.filter(p => p.id != id))
        let idr = this.props.catchs.findIndex(x => x.id === ids)
        console.log(idr)
        this.props.ReleasePoke(idr)
    }

    render(){
        const { catchs, sideShow } = this.props
        console.log('ini '+sideShow)
        return(
            <div className={`sidebarWrap ${sideShow}`}>
                <div className="leftSide">
                    <div className="listHeader">
                        <div className="close-btn" onClick={() => this.props.changeSideShow('')}>&#60; My Pokemon List</div>
                    </div>
                    <div className="wraplistmypoke">
                        {!catchs.length ? <div>no data avalaible</div> : catchs.map((p, index) => (
                        <div className="listmypoke" key={index}>
                            <div className="btn-close" onClick={() =>this.releasePokemon(p.id)}>X</div>
                                <div className="profile">
                                    <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}/>
                                    <h3>{p.name}</h3>
                                    <h1>{p.nickname}</h1>
                                </div>
                                <div className="descPoke">
                                    <h3>Moves</h3>
                                    {p.moves && p.moves.map((p, index) => (
                                        <h1 key={index}>{p}</h1>
                                    ))}
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div onClick={() => this.props.changeSideShow('')} className="closebar">
                
                </div>
            </div>
        )
    }
}

export default CompSidebar