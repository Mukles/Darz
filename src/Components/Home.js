import React from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import Title from './Title';
import LinkBar from './LinkBar';
import Products from './Products';
import ProductSlider from './ProductSlider';
import SearchValue from './SearchValue';
import Suggation from './Suggation';
import { useSelector } from 'react-redux';

const Home = () =>{
  const data = useSelector(state =>({ Products: state.Product}));
  const { value, isSuggationOpen } = data.Products;
  return(
    <>
      <Title />
      <LinkBar />
      <Navbar />
      {value && isSuggationOpen ? <Suggation /> : (isSuggationOpen && value) || (isSuggationOpen)? <SearchValue />: null}
      <ProductSlider />
      <Products />
    </>
  )
}

export default Home
