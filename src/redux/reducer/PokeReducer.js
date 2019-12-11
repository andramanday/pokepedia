import {
  GET_ALL_POKEMONS_BEGIN,
  GET_ALL_POKEMONS_SUCCESS,
  GET_ALL_POKEMONS_FAIL,
  GET_PREVNEXT_BEGIN,
  GET_PREVNEXT_SUCCESS,
  GET_PREVNEXT_FAIL,
  GET_POKEMON_BEGIN,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
  CATCH_POKEMON,
  RELEASE_POKEMON,
  SHOW_SIDEBAR,
} from '../action/PokeAction'

const initialState = {
  pokemons: null,
  pokemon: null,
  loading: false,
  error: null,
  next: null,
  previous: null,
  catchs: [],
  sideShow: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_ALL_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: action.payload.data.results,
        next: action.payload.data.next,
        previous: action.payload.data.previous,
      }
    case GET_ALL_POKEMONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_PREVNEXT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_PREVNEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: action.payload.data.results,
        next: action.payload.data.next,
        previous: action.payload.data.previous,
      }
    case GET_PREVNEXT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_POKEMON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload.data
      }
    case GET_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case CATCH_POKEMON:
      return {
        ...state,
        loading: false,
        catchs: state.catchs.concat(action.payload)
      }
    case RELEASE_POKEMON:
      return {
        ...state,
        loading: false,
        catchs: [
            ...state.catchs.slice(0, action.payload),
            ...state.catchs.slice(action.payload + 1)
        ],
      }
      case SHOW_SIDEBAR:
        return {
          ...state,
          sideShow: action.payload,
        }
    default:
      return state
  }
}