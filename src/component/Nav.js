import React from 'react'
import "../css/style.css"
import "../css/responsive.css"

const Nav = () => {
  return (
    <div className='nav'>
    <div className='header'>
        <h1>UnCodemy</h1>
      <div className='header-btn'>
        <button  id='call-us-btn' >  <a style={{color: "white"}} href="tel:9546405159">Call Us</a></button>
        <button id='chat-btn'><img src="https://www.upgrad.com/bootcamps/images/icon-sprite-new1.svg" class="icon whatsapp-icon"></img>Chat With Us</button>
      </div>
      </div>
       <hr style={{margin:"0"}}/>
       </div>
  )
}

export default Nav