import React,{ useState, useEffect } from 'react'
import "./Nav.css" 

export default function Nav() {

    const [show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", ()=> {
        if(window.scrollY > 50){
            setShow(true)
        }else{
            setShow(false)
        }
      })

      return () => {
        window.removeEventListener("scroll", ()=> {
        })
      }
    })
    
  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img 
            alt='Netflix_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img 
            alt="User logged"
            src="https://img.favpng.com/15/13/21/computer-icons-user-login-desktop-wallpaper-png-favpng-50cVSt0m1jw7SRtPEv8KvVUvF.jpg"
            className='nav__avatar'
        />

    </nav>
  )
}
