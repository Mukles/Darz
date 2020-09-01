import * as types from '../action/actionTypes'
const init = {
  loading: true,
  Products: [],
  value: '',
  saveValue: [],
  error: ''
}
export const ProductReaducer = (state = init, action) => {
    switch(action.type){
        case types.PRODUCT_LOADING:
            return {...state, loading: true}
        case types.PRODUCT_LOAD_SUCCESS:
            return {...state, loading: false, Products: action.payload}
        case types.PRODUCT_LOAD_ERROR:
          return {...state, error: action.payload, loading: false}
        case types.SEARCH_VALUE:
          return {...state, value: action.value}
        case types.SAVE_SEARCH:
          return {...state, saveValue: [action.searchValue, ...state.saveValue]}
        default:
          return state
    }
}
