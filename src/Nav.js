import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false)

  const transitionNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img 
      className='nav_logo'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />

      <img
      className='nav_avatar'
      src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" />
      </div>
      
    </div>
  )
}

export default Nav