import React from 'react';
import Top from '../images/Top.webp';
import Top2 from '../images/Mobiles.webp';
import Top3 from '../images/Electronics.webp';
import Top4 from '../images/Appliances.webp';
import Top5 from '../images/Fashion.webp';
import Top6 from '../images/Beauty.webp';
import Top7 from '../images/Home.webp';
import Top8 from '../images/furniture.webp';
import Top9 from '../images/flights.webp';
import Top10 from '../images/grocery.webp';

export default function Categories() {
  return (
    <>
    <div className='col-md-1 text-center'>
        <img src={Top}/>
        <p>Top Offers</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top2}/>
        <p>Mobiles</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top3}/>
        <p>Electronics</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top4}/>
        <p>Appliances</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top5}/>
        <p>Fashion</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top6}/>
        <p>Beauty</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top7}/>
        <p>Home</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top8}/>
        <p>Furniture</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top9}/>
        <p>Flights</p>
    </div>
    <div className='col-md-1 text-center'>
        <img src={Top10}/>
        <p>Grocery</p>
    </div>

    </>
  )
}

