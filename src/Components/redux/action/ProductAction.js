import * as types from './actionTypes';
import { createClient } from 'contentful';

 const LOADING = data => ({ type: types.PRODUCT_LOADING, payload: data });
 const SUCCESSS = data => ({ type: types.PRODUCT_LOAD_SUCCESS, payload: data});
 const ERROR = error => ({type: types.PRODUCT_LOAD_ERROR, payload: error});
 export const setSearchValue = data =>({ type: types.SEARCH_VALUE, value: data});
 export const saveSearch = saveValue =>({ type: types.SAVE_SEARCH, searchValue: saveValue })
 export const saveSuggation = () => ({type: types.SAVE_SUGGATION})
 export const closeSuggation = () => ({type: types.CLOSE_SAVE_SUGGATION})
 export const deleteSuggation = (data) => ({type: types.DELETE_ITEM, payload: data});
 export const isonClickCliked = () => ({type: types.IS_ONCLICK_CLICKED});
 export const getElement = () => ({type: types.GET_ELEMENT});

const client = createClient({
  space: "kwv7uhkbidp3",
  accessToken: "-wnq6bHfRPTuxJYU_7g3gTgam5bvA44_XILp0tmn1-8"
})

 export const GetProducts = () =>{
   return dispatch =>{

     dispatch(LOADING());
     client.getEntries()
      .then(res => dispatch(SUCCESSS(
        res.items.map((item, i)=>{
           const id = i + 1;
          const images = item.fields.images.map(img => (img.fields.file.url));
          return {id, ...item.fields, images}
        })
    )))
      .catch(err => dispatch(ERROR(err)))
   }
 }
