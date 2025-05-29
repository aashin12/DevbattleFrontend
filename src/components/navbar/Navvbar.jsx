import React, { useState } from 'react'
import "../../styles/navbar.css";
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-router-dom';

const Navvbar = () => {
    const [showMenu,setShowMenu] = useState(false);

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
  return (
    <>
    <center>
        <nav style={{ backgroundColor: "var(--primary-color)" }} className='text-white py-6 relative z-50'>
            <div className='container flex justify-between items-center'>
                {/* logo section */}
                <h1 className='text-3xl font-semibold flex justify-center items-center gap-2'>
                    {/* logo */}
                    <img
          src="https://www.shutterstock.com/image-vector/initial-letter-d-b-logo-600nw-2345590363.jpg"
          alt="Logo"
          className="w-15 h-14 rounded-full border-2 border-pink-400"
        />
                    DevBattle</h1>
                {/* menu section */}
                <ul className='hidden md:flex flex-row items-center gap-4 lg:gap-8 text-lg'>
                   <Link to={'/login'}>
                    <li>
                        <p className='inline-block px-3 py-2 hover:text-pink-400 transition-colors duration-200'>Home</p>
                    </li>
                    </Link>
                    <Link to={'/login'}>
                    <li>
                        <p className='inline-block px-3 py-2 hover:text-pink-400 transition-colors duration-200'>About</p>
                    </li>
                    </Link>
                    <Link to={'/login'}>
                    <li>
                        <p
                        className='inline-block px-3 py-2 hover:text-pink-400 transition-colors duration-200'>Sections</p>
                    </li>
                    </Link>
                    <Link to={'/login'}>
                    <li>
                        <p
                        className='inline-block px-3 py-2 hover:text-pink-400 transition-colors duration-200'>Contact Us</p>
                    </li>
                    </Link>
                    <Link to={'/login'}>
                        <li>
                            <button className='border-2 border-pink-400  px-6 py-2 rounded-full hover-bg-secondary
                            ' style={{height:"3rem",width:"7rem"}}>Login</button>
                        </li>
                    </Link>
                </ul>

                {/* hamburger menu section */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        <HiMiniSquares2X2 className='text-2xl'/>
                    </button>
                </div>
            </div>
        </nav>
    </center>

    {/* mobile menu section */}
    <ResponsiveMenu showMenu={showMenu}/>
    </>
  )
}

export default Navvbar