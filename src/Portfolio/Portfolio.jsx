import React from 'react'
import './portfolio.css'
import cabin from '../images/cabin.png'
import cake from '../images/cake.png'
import circus from '../images/circus.png'
import game from '../images/game.png'
import safe from '../images/safe.png'
import submarine from '../images/submarine.png'
export default function () {
  return (
    <div className='p-5'>
      <h1 className='title fs-1 fw-bold mt-5 pt-5'>PORTFOLIO</h1>
      <div className='d-flex justify-content-center'>
      <div className='col-md-1 m-2 rounded-pill  title-div'></div>
      <i className="fa-solid fa-star text-light  fs-4  title  "></i>
      <div className='col-md-1 m-2 rounded-pill title-div '></div>
      </div>
      <div className='container p-5'>
        <div className='row'>
<div className='col-md-4 p-4'>
<div className='item position-relative overflow-hidden'>
<img src={cabin} className="w-100 rounded"></img>
<div className='layer position-absolute'>
<i class="fa-solid fa-circle-plus fs-1 text-light"></i>
</div>
</div>
</div>
<div className='col-md-4 p-4'>
<div className='item position-relative overflow-hidden'>
<img src={cake} className="w-100 rounded "></img>
<div className='layer position-absolute'>
<i class="fa-solid fa-circle-plus fs-1 text-light"></i>
</div>
</div>
</div>
<div className='col-md-4 p-4'>
<div className='item position-relative overflow-hidden'>
  <div className='item position-relative overflow-hidden'>
<img src={circus} className="w-100 rounded "></img>
<div className='layer position-absolute'>
<i class="fa-solid fa-circle-plus fs-1 text-light"></i>
</div>
</div>
<div className='layer position-absolute'>
<i class="fa-solid fa-circle-plus fs-1 text-light"></i>
</div>
</div></div>
<div className='col-md-4 p-4'>
<div className='item position-relative overflow-hidden'>
<img src={game} className="w-100 rounded "></img>
<div className='layer position-absolute'>
<i class="fa-solid fa-circle-plus fs-1 text-light"></i>
</div>
</div>
</div>
<div className='col-md-4 p-4'>
<div className='item position-relative overflow-hidden '>
<img src={safe} className="w-100 rounded "></img>
<div className='layer position-absolute'>
<i class="fa-solid fa-circle-plus fs-1 text-light"></i>
</div>
</div>
</div>
<div className='col-md-4 p-4'>
   <div className='item position-relative overflow-hidden'>
<img src={submarine} className="w-100 rounded "></img>
<div className='layer position-absolute'>
<i class="fa-solid fa-circle-plus fs-1 text-light"></i>
</div>
</div>
</div>
      </div>
    </div>
    <div id='outer-box'>
      <div id='inner-box'>
      <i class="fa-solid fa-circle-xmark m-3" id="close"></i>
      </div>
    </div>
    </div>
  )
}
