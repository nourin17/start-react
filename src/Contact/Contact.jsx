import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div className='pt-5'>
      <h1 className='title fw-bolder fs-1 mt-5 pt-5'>CONTACT ME</h1>
      <div className='d-flex justify-content-center'>
      <div className='col-md-1 m-2 rounded-pill  title-div'></div>
      <i className="fa-solid fa-star text-light  fs-4  title  "></i>
      <div className='col-md-1 m-2 rounded-pill title-div '></div>
      </div>
      <form className='w-75 mx-auto p-5'>
        <input placeholder='Name' className='w-75 border-0 border-light p-3 '></input>
        <input placeholder='Email Address' className='w-75 border-0 border-light p-3'></input>
        <input placeholder='Phone Number' className='w-75 border-0 border-light p-3'></input>
        <textarea placeholder='Message' className='w-75 border-0 border-light p-3'></textarea>
    <div className=' ms-5 ps-5'>
    <button className='text-light p-3 col-md-1 d-block rounded ms-5 border-0'>Send</button></div>
      </form>
      <div className='bg p-5'>
      <div className='row col-md-12 text-light text-center'>
        <div className=' col-md-3 offset-2'>
          <h4>LOCATION</h4>
          <p className='text-center'>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className='col-md-3'>
            <h4>AROUND THE WEB</h4>
            <i className="fa-brands fa-facebook icon"></i>
            <i className="fa-brands fa-twitter icon"></i>
            <i className="fa-brands fa-linkedin icon"></i>
            <i class="fa-brands fa-dribbble icon"></i>
            </div>
            <div className='col-md-3'>
            <h4>ABOUT FREELANCER</h4>
            <p >Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
          </div></div>
      </div>

  )
}
