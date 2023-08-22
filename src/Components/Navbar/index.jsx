import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
import logo from "../../assets/logo.gif"

export const Navbar=()=> {

  return (
    <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink to={'/domestic'}>Domestic</NavLink>
        <NavLink to={'/international'}>International</NavLink>
        <NavLink to={'/place'}>Place</NavLink>
        <NavLink to={'/package'}>Packages</NavLink>
        <NavLink to={'/contact'}>Contact Us</NavLink>
        <NavLink to={'/number'}>+91 123456789</NavLink>
        <NavLink to={'/paynow'}>Pay Now</NavLink>
        <img className='logo' src={logo} alt="logo"/>
    </nav>
  )
}

