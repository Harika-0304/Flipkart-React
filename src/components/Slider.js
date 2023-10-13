import React from 'react';
import sli2 from '../images/sli2.jpg';
import slid2 from '../images/slid2.jpeg';
import slid3 from '../images/slid3.jpg';
import slid4 from '../images/slid4.jpg';
import slid5 from '../images/slid5.jpg';
export default function () {
  return (
    <>
   
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active "data-bs-interval="1000">
      <img src={sli2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"data-bs-interval="1000">
      <img src={slid2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"data-bs-interval="1000">
      <img src={slid3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"data-bs-interval="1000">
      <img src={slid4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"data-bs-interval="1000">
      <img src={slid5} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}
