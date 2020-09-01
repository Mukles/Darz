import React from 'react';

const Sidebar = () =>{
  return(
    <>
      <h6>16 Products</h6>
      <form>
        <div className='form-group row mt-4'>
          <lable htmlfor='select' className='my-auto font-weight-bold text-uppercase'>Order : </lable>
          <select className='form-control w-50 ml-2'>
            <option value='latest'>Latest</option>
            <option value='hightest'>Highest</option>
            <option value='lowest'>Lowest</option>
          </select>
        </div>
        <div className='form-group row mt-4'>
          <lable htmlfor='select' className='my-auto font-weight-bold text-uppercase'>Size : </lable>
          <select className='form-control w-50 ml-2'>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default Sidebar;
