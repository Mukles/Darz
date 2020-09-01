import React, { useState } from 'react';
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
  const { value } = data.Products;
  const [isOpenSearchValue, setIsopenSearchValue] = useState(false);
  return(
    <>
      <Title />
      <LinkBar />
      <Navbar />
      {value? <Suggation />: <SearchValue />}
      <ProductSlider />
      <Products />
    </>
  )
}

export default Home
