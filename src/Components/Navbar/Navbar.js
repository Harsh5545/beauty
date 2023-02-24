import React from 'react'
import style from './Navbar.module.css'
import Diamond from'../../Components/Images/diamondRemove.png'
function Navbar() {
  return (
      <header className={style.Navbar}>
          
          <div><img className={style.logoImage} src={Diamond} alt="Beauty Parlour"/></div>
          <nav className={style.menuItem}>
          <div><a href='#'>Home</a></div>
          <div> <a href='#'>Why Us</a></div>
          <div> <a href='#'>Service</a></div>
        <div> <a href='#'>Pricing</a></div>
        <div> <a href='#'>Contact</a></div>
         </nav>
    </header>
  )
}

export default Navbar