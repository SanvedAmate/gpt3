
import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
   <p><a href='#home'>HOME</a></p>
          <p><a href='#wgpt3'>What is GPT</a></p>
          <p><a href='#possibilities'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#cta'>Get Started</a></p>
          <p><a href='#blog'>Libraries</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_containers">
        <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-signs'>
        <p>Sign In </p>
        <button type='button'>Sign Up</button> 
      </div>
      <div className='gpt3__navbar-menu'>
        {
          toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu &&(
          <div className='gpt3__navbar-menu_containers scale-up-center'>
            <div className='gpt3__navbar-menu_containers-links'>

            <Menu />
            <div className='gpt3__navbar-menu_container-signs'>
        <p>Sign In </p>
        <button type='button'>Sign Up</button> 
      </div>
          </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Navbar;