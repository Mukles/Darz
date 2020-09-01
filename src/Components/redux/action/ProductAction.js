import * as types from './actionTypes';
import { createClient } from 'contentful';

 const LOADING = data => ({ type: types.PRODUCT_LOADING, payload: data });
 const SUCCESSS = data => ({ type: types.PRODUCT_LOAD_SUCCESS, payload: data});
 const ERROR = error => ({type: types.PRODUCT_LOAD_ERROR, payload: error});
 export const setSearchValue = event =>({ type: types.SEARCH_VALUE, value: event.target.value});
 export const saveSearch = saveValue =>({ type: types.SAVE_SEARCH, searchValue: saveValue })

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
