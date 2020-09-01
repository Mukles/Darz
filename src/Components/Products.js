import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const data = useSelector(state => state.Product);
  const {loading, Products, error} = data;
  return(

      <section id='Products'>
        {
          loading ? <h1>LOADING...</h1>:
          <div className='container'>
            {error ? <h1 className='text-center'>{error.message}</h1>:
            <div className='row'>
              {
                Products.map((item, i) => (
                  <div className='col-md-3' key={i}>
                    <div className='card'>
                      <img className='card-img-top' src={item.images[0]} alt='my-pic' />
                      <div className='card-footer '>
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
              <h1>Mukles</h1>
            </div>
          }
          </div>
        }
    </section>
  )
}

export default Products;
