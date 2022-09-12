import React from 'react'
import './about.css'
export default function About() {
  return (
    <div id='about'>
      <div className='container p-5'>
<h1 className='text-light p-5 mt-5'>ABOUT</h1>
<div className='d-flex justify-content-center mt-5'>
<div className='col-md-1 m-2 bg-light rounded-pill'></div>
      <i className="fa-solid fa-star text-light  fs-4  text-light  "></i>
      <div className='col-md-1 m-2 bg-light  rounded-pill'></div>
      </div></div>
      <div className=' row col-md-12 pb-5 pt-5'>
        <div className='col-md-3 offset-3 text-light text-start fs-5 pb-5'><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        <div className='col-md-3 text-light text-start fs-5 pb-5'><p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
      </div>
    </div>
  )
}
