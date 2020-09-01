  import React, { useState } from 'react';
  import logo from '../logo512.png';
  import { Link } from 'react-router-dom';
  import TB1NaLBtO_1gK0jSZFqXXcpaXXa from '../TB1NaLBtO_1gK0jSZFqXXcpaXXa.png';
  import { Consumer } from './ContextProvider';
  import { setSearchValue } from './redux/action/ProductAction';
  import { saveSearch } from './redux/action/ProductAction';
  import { connect } from 'react-redux';


  const Navbar = (props) =>{
    const { setSearchValue, saveSearch } = props;
    const [isOpenSearchValue, setIsopenSearchValue] = useState(false);

    return(
      <section id='navbar' className='shadow'>
        <div className='container'>
          <div className='navbar navbar-extends-lg navbar-dark'>
            <Link to='/' className='navbar-brand'>
              <img src={logo} alt='navbar-barnd' style={{width: '120px'}} />
            </Link>
            <ul className='navbar nav ml-auto'>
              <li className='nav-item'>
                <div className='input-group'>
                  <input type='search' value={props.Products.value} name='search' placeholder='Search in Daraz' className='form-control' onChange={setSearchValue} onFocus={()=> alert('hey')} />
                  <div className='input-group-append'>
                    <span onClick = {(event) =>{
                      saveSearch('Mukles')
                    }}  title='search' className='input-group-text bg-warning' style={{cursor: 'pointer'}}><i className="fas fa-search"></i></span>
                  </div>
                </div>
              </li>
              <li className='nav-item ml-3' title='Cart'>
                <Consumer>
                  {
                    data =>{

                      return(
                        <>
                          <a  className='nav-link' onClick={data.getElement}>
                            <i style={{fontSize: '22px', color: 'black', cursor: 'pointer'}} className="fas fa-shopping-cart"></i>
                          </a>
                        </>
                      )
                    }
                  }
                </Consumer>

              </li>
              <li className='nav-item' title='download-app'>
                <a href='https://play.google.com/store/apps/details?id=com.daraz.android&hl=bn' target='_blank' className='nav-link'><i style={{color: 'black', fontSize:'22px'}} className="fas fa-download"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  const mapStateToProps = state => ({Products: state.Product});

  const mapDispatchToProps ={
    setSearchValue,
    saveSearch
  }

  export default connect(mapStateToProps,mapDispatchToProps) (Navbar);
