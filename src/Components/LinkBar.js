import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkBar = () =>{
  return(
    <section id='LinkBar' className='bg-light' style={{fontSize: '12px'}}>
      <div className='container'>
        <nav className='navbar navbar-expand-lg p-0'>
          <ul className='navbar nav ml-auto p-0'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link font-weight-bold text-uppercase' activeClassName= 'active' exact>save more on app</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link font-weight-bold text-uppercase text-dark' to='/dgljdflfsdfsdlkfj' activeClassName= 'active' exact>sell on daraz</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link font-weight-bold text-uppercase text-dark'>customer care</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link font-weight-bold text-uppercase text-dark' activeClassName= 'active' exact>track my order</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link font-weight-bold text-uppercase text-dark' activeClassName= 'active' exact to='/'>login</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link font-weight-bold text-uppercase text-dark' activeClassName= 'active' exact to='/'>singup</NavLink>
            </li>
            <li>
              <NavLink to='/' className='nav-link font-weight-bold text-uppercase text-dark' activeClassName= 'active' exact>ভাষা</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default LinkBar;
