import React from 'react';
import './App.css';
import './css/bootstrap.css';
import Search from './components/Search';
import Categories from './components/Categories';
import Slider from './components/Slider';
import bank from './images/bank.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import Form from './components/Form';


export default function App() {
  return (
    <>
    <div className='container-fluid'>
      {/*<div className='row top'>
        <Search/>
      </div>
      <div className='row justify-content-center category'>
        <Categories/>
      </div>
      <div className='row'>
        <Slider/>
      </div>
      <div class="bank">
        <img src={bank}/>
      </div>
      <div class="row  float-left offers1">
        
        <div class="col-md-4 offers1im">
          <img src={img1}/>
        </div>
        <div class="col-md-4 offers1im">
          <img src={img2}/>
        </div>
        <div class="col-md-4 offers1im">
          <img src={img3}/>
        </div>
  </div>*/}
    
  <Form/>
    </div>
    </>
  )
}
