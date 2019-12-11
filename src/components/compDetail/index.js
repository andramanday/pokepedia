import { getPokeById, CatchPoke, changeSideShow } from '../../redux/action/PokeAction'
import { connect } from 'react-redux'
import CompDetail from './CompDetail'

const mapStoreToProps = state => ({
  pokemon: state.pokemon.pokemon,
  loading: state.pokemon.loading,
  catchs: state.pokemon.catchs,
})

const mapDispatchToProps={
  getPokeById,
  CatchPoke,
  changeSideShow,
}

export default connect(mapStoreToProps, mapDispatchToProps)(CompDetail)