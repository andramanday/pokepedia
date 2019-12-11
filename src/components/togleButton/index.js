import { changeSideShow } from '../../redux/action/PokeAction'
import { connect } from 'react-redux'
import TogleButton from './TogleButton'

const mapStoreToProps = state => ({
  sideShow:state.pokemon.sideShow
})

const mapDispatchToProps={
  changeSideShow
}

export default connect(mapStoreToProps, mapDispatchToProps)(TogleButton)