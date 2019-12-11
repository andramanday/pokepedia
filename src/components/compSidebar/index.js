import { ReleasePoke, changeSideShow } from '../../redux/action/PokeAction'
import { connect } from 'react-redux'
import CompSidebar from './CompSidebar'

const mapStoreToProps = state => ({
  catchs:state.pokemon.catchs,
  sideShow:state.pokemon.sideShow
})

const mapDispatchToProps={
  ReleasePoke,
  changeSideShow
}

export default connect(mapStoreToProps, mapDispatchToProps)(CompSidebar)