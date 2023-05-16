import React from 'react'
import "../css/style.css"
import "../css/responsive.css"
import logo from "../image/tools/u.png"
import wa from "../image/whats-removebg-preview.png"

const Nav = () => {
  return (
    <div className='nav'>
    <div className='header'>
  <img className='img1' style={{height:"2rem"}} src={logo} alt="" />
      <div className='header-btn'>
        <button style={{background:"#ff5421"}}  id='call-us-btn' >  <a style={{color: "white", }} href="tel:+91-770 192 8515">Call Us</a></button>
        <button id='chat-btn'><img src={wa} class="icon whatsapp-icon"></img><a style={{color: "green"}}  href="https://wa.link/14ytee" target='_blank'>Chat With Us</a></button>
      </div>
      </div>
       <hr style={{margin:"0"}}/>
       </div>
  )
}

export default Nav