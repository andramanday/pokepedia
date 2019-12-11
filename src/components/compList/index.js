import { getPokemon, getPrevNext } from '../../redux/action/PokeAction'
import { connect } from 'react-redux'
import CompList from './CompList'

const mapStoreToProps = state => ({
  pokemons: state.pokemon.pokemons,
  next: state.pokemon.next,
  previous: state.pokemon.previous,
  loading:state.pokemon.loading,
  catchs:state.pokemon.catchs
})

const mapDispatchToProps={
  getPokemon,
  getPrevNext
}

export default connect(mapStoreToProps, mapDispatchToProps)(CompList)