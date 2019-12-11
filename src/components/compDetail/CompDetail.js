/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link  } from "react-router-dom";
import './CompDetail.scss'


class CompDetail extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            tabs: 'stat',
            rNum: 55,
            moves: [],
            catchPoke: [],
            catchName: '',
            starNum: 0
        }
    }

    getTab(Tabs){
        this.setState({
            tabs: Tabs,
        })
    }
        
    componentDidMount() {
        this.props.getPokeById(this.props.location.pathname.split("/").slice(-1)[0])

        const rNum = setInterval(() => this.startTimer(), 10);
        this.setState({ rNum })
    }

    componentWillUnmount() {
        // Make sure to clear the interval, on unmount
        clearInterval(this.state.rNum);
    }

    startTimer() {
        this.setState({
            rNum : Math.floor(Math.random() * 100) + 1
        })
    }

    tryCatch(pokeName){
        let gotcha = this.props.catchs.filter(x => x.id === this.props.location.pathname.split("/").slice(-1)[0])
        if(!gotcha.length){
            if(!this.state.moves.length || !this.state.catchName){
                alert('Please select at least 1 move and type a nickname')
            }else{
                let dapat = this.state.rNum
                let pokeId = this.props.location.pathname.split("/").slice(-1)[0];
                let ownName = this.state.catchName
                let selectM = this.state.moves
                if(dapat > 50){
                    alert('Congratulations, you got a new Pokemon, in your list')
                    this.props.CatchPoke([{"id": pokeId, "name": pokeName, "nickname": ownName, "moves": selectM}])
                    this.props.history.push('/')
                    this.props.changeSideShow('open')
                }else{
                    alert('Try Again')
                    // this.props.history.push('/')
                }
            }
        }else{
            alert('You already have this Pokemon')
        }

    }

    insertMove = (move) =>{
        let joined = this.state.moves.concat(move);
        let test = this.state.moves.filter(x => x.name === move)
        console.log(test.length)
        if(this.state.moves.length < 4){
            if(test.length){
                alert(move+', already')
            }else{
                this.setState({ moves: joined })
            }
        }else{
            alert('enough already')
        }
        // this.setState({ moves: [...this.state.moves, move] })
    };

    onChangeValue = event => {
        this.setState({ catchName: event.target.value });
    };
    
    render(){
        const { pokemon } = this.props
        // console.log(this.state.rNum)
        const Filler = (props) => {
            return (
                props.percentage >= 100 ?
                    <div className="filler" style={{ width: "100%" }}>
                        <div className="title">{`${props.percentage}%`}</div>
                    </div>
                :
                    <div className="filler" style={{ width: `${props.percentage}%` }}>
                        <div className="title">{`${props.percentage}%`}</div>
                    </div>
                )
        }  
        return(
            <div className="detailWrap">
                <div className="detailView">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.location.pathname.split("/").slice(-1)[0]}.png`} className="pokeImg" />
                    <Link  to="/" className="closeBtn">X</Link>
                    <div className="pokeData">
                        <h2>{pokemon && pokemon.forms[0].name}</h2>
                        <div className="property">
                            <div className="left">Base Experience</div>
                            <div className="right">{pokemon && pokemon.base_experience} XP</div>
                        </div>
                        <div className="property">
                            <div className="left">Height</div>
                            <div className="right">{pokemon && pokemon.height} / 10 m</div>
                        </div>
                        <div className="property">
                            <div className="left">Weight</div>
                            <div className="right">{pokemon && pokemon.weight} / 10 kg</div>
                        </div>
                        <div className="heaade">
                            <div className="body-header">
                                <button className={this.state.tabs === 'stat' ? 'active' : ''} onClick={() => this.getTab('stat')}>Stat</button>
                                <button className={this.state.tabs === 'type' ? 'active' : ''} onClick={() => this.getTab('type')}>Types</button>
                                <button className={this.state.tabs === 'ability' ? 'active' : ''} onClick={() => this.getTab('ability')}>Abilities</button>
                                <button className={this.state.tabs === 'move' ? 'active' : ''} onClick={() => this.getTab('move')}>Moves</button>
                            </div>
                        </div>
                        <div className="tabs-body">
                        {this.state.tabs === 'stat' && 
                            pokemon && pokemon.stats.map((s, index) => (
                                <div key={index} className="pokeStat">
                                    <div className="left">{s.stat.name}</div>
                                    <div className="right">
                                        <div className="progress-bar">
                                            <Filler percentage={`${s.base_stat}`} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {this.state.tabs === 'type' &&
                            <div className="types">
                                <h3>Pokemon Types</h3>
                                {pokemon && pokemon.types.map((p, index) => (
                                    <div className="type" key={index}>
                                            {p.type.name}
                                    </div>
                                ))}
                            </div>
                        }
                        {this.state.tabs === 'ability' &&
                            <div className="abilities">
                            <h3>Pokemon Abilities</h3>
                                {pokemon && pokemon.abilities.map((p, index) => (
                                    <div className="ability" key={index}>
                                            {p.ability.name}
                                    </div>
                                ))}
                            </div>
                        }
                        {this.state.tabs === 'move' &&
                            <div className="moves">
                            <h3>Pokemon Moves</h3>
                                {pokemon && pokemon.moves.map((p, index) => (
                                    <button className="move" key={index} onClick={() =>this.insertMove(p.move.name)}>
                                            {p.move.name}
                                    </button>
                                ))}
                            </div>
                        }
                        </div>
                        <button className="close" onClick={() => this.tryCatch(pokemon.forms[0].name)}>{`CATCH`}</button>
                        <p>{`${this.state.rNum}%`}</p>
                        <div className="selected">
                                <input
                                type="text"
                                value={this.state.catchName}
                                onChange={this.onChangeValue}
                                placeholder='insert nickname'
                                />
                            <div className="abilities">
                                {this.state.moves.map((p, index) => (
                                    <div className="ability" key={index}>
                                            {p}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
} 

export default CompDetail