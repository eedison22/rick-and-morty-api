import React, { Fragment } from 'react'
import banner from '../img/rickandmortybanner4.jpg'

const Header = () => {
  return (
    <div className='box-border'>
    <img src={banner} alt="rick and morty banner"/>
    </div>
  )
}

export default Header;