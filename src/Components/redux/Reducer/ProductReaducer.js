import * as types from '../action/actionTypes';
import { produce } from 'immer';

const init = {
  loading: true,
  Products: [],
  value: '',
  saveValue: [],
  isSuggationOpen: false,
  error: '',
  isClicked: true,
  suggestion: [],
  getElement: [],
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
          return {...state, value: action.value, suggestion:[...state.Products.filter(item =>
            item.subItem.toLowerCase().indexOf(state.value.toLowerCase()) !== -1 ||
            item.subItem.toLowerCase().indexOf(state.value.toLowerCase()) !== -1 ||
            item.name.toLowerCase().indexOf(state.value.toLowerCase()) !== -1)]}
        case types.SAVE_SEARCH:
          return {...state, saveValue: [action.searchValue, ...state.saveValue]}
        case types.SAVE_SUGGATION:
          return {...state, isSuggationOpen: true}
        case types.CLOSE_SAVE_SUGGATION:
          return {...state, isSuggationOpen: false}
        case types.IS_ONCLICK_CLICKED:
          return {...state, isClicked: false}
        case types.GET_ELEMENT:
          return {...state, getElement:[state.Products.filter(item => item)]}
        case types.DELETE_ITEM:
          return produce(state, draftState =>{
            const deleteItem = state.saveValue.find(item => action.payload);
            const index = state.saveValue.indexOf(deleteItem);
            state.saveValue[index] = 'Suggestion removed';
          })
        default:
          return state
    }
}
