import React from 'react'
import avatar from "../images/avatar.svg"
import './home.css'
export default function Home() {
  return (
    <div className='home pt-5'>
      <img src= {avatar} className="col-md-2 p-2 mt-5"></img>
      <h1 className='fw-bold text-light title-head p-3'>START REACT</h1>
      <div className='d-flex justify-content-center'>
      <div className='col-md-1 m-2 rounded-pill bg-light'></div>
      <i className="fa-solid fa-star text-light  fs-4 "></i>
      <div className='col-md-1 m-2 rounded-pill bg-light'></div>
      </div>
      <p className='text-light fs-4 m-2'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
