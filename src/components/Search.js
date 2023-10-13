import React from 'react';
import logo from '../images/logo.svg';
import icon from '../images/icon.svg'

export default function Search() {
  return (
    <>
    <div className='col-md-2 float-start'>
        <img src={logo}/>
         <span>Explore</span>
         <span>Plus</span>
         <img src={icon}/>
    </div>
    <div class="col-md-6 ">
      <button class="icon">
        <i class="fa-solid fa-magnifying-glass"></i></button>
        <input type="text" class="search float-end" placeholder='Search for Products,Brands and More'></input>
    </div>
    <div className='col-md-4 log '>
      <ul>
        <li><i class="fa-solid fa-store"></i>Become a Seller</li>
        <li><i class="fa-regular fa-user"></i>Sign in</li>
        <li><i class="fa-solid fa-cart-shopping"></i>cart</li>
        <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
      </ul>
    </div>
    </>
  )
}
