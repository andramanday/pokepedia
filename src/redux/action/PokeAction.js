import ApiCall from '../../modules/APIcall'

export const getPokemon=()=>dispatch=>{
  dispatch({
    type:GET_ALL_POKEMONS_BEGIN,
  })
  return ApiCall({
    method:'GET',
    url:`api/v2/pokemon`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_POKEMONS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_POKEMONS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getPrevNext=(urls)=>dispatch=>{
  dispatch({
    type:GET_PREVNEXT_BEGIN,
  })
  return ApiCall({
    method:'GET',
    url:urls
  })
  .then(res=>{
    dispatch({
      type: GET_PREVNEXT_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PREVNEXT_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getPokeById=(id)=>dispatch=>{
  dispatch({
    type:GET_POKEMON_BEGIN,
  })
  return ApiCall({
    method:'GET',
    url:`/api/v2/pokemon/${id}/`
  })
  .then(res=>{
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_POKEMON_FAIL,
      payload: {error}
    })
    return error
  })
}

export const CatchPoke=(datas)=>dispatch=>{
  dispatch({
    type:CATCH_POKEMON,
    payload: datas
  })
  return datas
}

export const ReleasePoke=(id)=>dispatch=>{
  dispatch({
    type:RELEASE_POKEMON,
    payload: id
  })
  return id
}

export const changeSideShow=(params)=>dispatch=>{
  dispatch({
    type:SHOW_SIDEBAR,
    payload: params
  })
  return params
}

export const GET_ALL_POKEMONS_BEGIN='GET_ALL_POKEMONS_BEGIN'
export const GET_ALL_POKEMONS_SUCCESS='GET_ALL_POKEMONS_SUCCESS'
export const GET_ALL_POKEMONS_FAIL='GET_ALL_POKEMONS_FAIL'

export const GET_PREVNEXT_BEGIN='GET_PREVNEXT_BEGIN'
export const GET_PREVNEXT_SUCCESS='GET_PREVNEXT_SUCCESS'
export const GET_PREVNEXT_FAIL='GET_PREVNEXT_FAIL'


export const GET_POKEMON_BEGIN='GET_POKEMON_BEGIN'
export const GET_POKEMON_SUCCESS='GET_POKEMON_SUCCESS'
export const GET_POKEMON_FAIL='GET_POKEMON_FAIL'

export const CATCH_POKEMON='CATCH_POKEMON'
export const RELEASE_POKEMON='RELEASE_POKEMON'

export const SHOW_SIDEBAR='SHOW_SIDEBAR'
