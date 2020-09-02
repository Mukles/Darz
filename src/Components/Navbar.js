  import React from 'react';
  import logo from '../logo512.png';
  import { Link } from 'react-router-dom';
  import TB1NaLBtO_1gK0jSZFqXXcpaXXa from '../TB1NaLBtO_1gK0jSZFqXXcpaXXa.png';
  import { Consumer } from './ContextProvider';
  import { setSearchValue } from './redux/action/ProductAction';
  import { saveSearch } from './redux/action/ProductAction';
  import { saveSuggation } from './redux/action/ProductAction';
  import { closeSuggation } from './redux/action/ProductAction';
  import { connect } from 'react-redux';
// onBlur={() => setTimeout(closeSuggation,500)}
  const Navbar = (props) =>{
    const { setSearchValue, saveSearch, saveSuggation, closeSuggation, value } = props;
    return(
      <section id='navbar' className='shadow'>
        <div className='container'>
          <div className='navbar navbar-extends-lg navbar-dark'>
            <Link to='/' className='navbar-brand'>
              <img src={logo} alt='navbar-barnd' style={{width: '120px'}} />
            </Link>
            <div className='input-group ml-auto' style={{width: '52%', zIndex: '3'}}>
              <input onFocusOut={ () =>{
                alert('hey')
              }} type='text' autoComplete="off" value={props.Products.value} name='search' placeholder='Search in Daraz' className='form-control search' onChange={(e) =>setSearchValue(e.target.value)} onKeyUp= {(e) =>{
                const keycode = e.keyCode;
                if(keycode ===13 && props.Products.value ){
                  saveSearch(props.Products.value)
                }

              }} onFocus = { () =>{
                setTimeout(() => saveSuggation(), 1000)
              }}/>
              <div className='input-group-append'>
                <span onClick = {(event) =>{
                  if(props.Products.value)
                    saveSearch(props.Products.value)
                }}  title='search' className='input-group-text bg-warning' style={{cursor: 'pointer'}}><i className="fas fa-search"></i></span>
              </div>
            </div>
            <ul className='navbar nav'>
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
                <a href='https://play.google.com/store/apps/details?id=com.daraz.android&hl=bn' target='_blank' className='nav-link'>
                  <img src={TB1NaLBtO_1gK0jSZFqXXcpaXXa} alt='download' className='img img-fluid' style={{width: '180px'}}/>
                </a>
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
    saveSearch,
    saveSuggation,
    closeSuggation
  }

  export default connect(mapStateToProps,mapDispatchToProps) (Navbar);
