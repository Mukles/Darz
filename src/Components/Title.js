import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../TB1PooFOlr0gK0jSZFnXXbRRXXa.jpg'

const Title = () =>{
  const [ block, setblock ] =useState(true);

  return(
    <header id='ad' className={`${ block? 'd-block': 'd-none'}`} style={{background: '#234B64'}}>
      <div className='container'>
        <img style={{border: 'none', position: 'relative'}} src={logo} alt="Workplace" useMap="#workmap" className='img img-fluid' />
        <map name="workmap">
          <area style={{outline: 'none'}} shape="rect" coords="664,22,809,55" alt="Computer" href="computer.htm" />
          <area style={{outline: 'none'}} shape="rect" coords="307,0,550,66" alt="Computer" href="computer.htm" />
        </map>
        <a style={{background: 'transparent', border: 'none', cursor: 'pointer', position: 'absolute', color: '#fff', fontSize: '1.5rem', right: '13%', top: '10px'}} onClick ={() => setblock(false)}>
          <i className="fas fa-times"></i>
        </a>
      </div>
    </header>
  )
}
export default Title;
