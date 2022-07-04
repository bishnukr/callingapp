import React from 'react'
import { NavLink } from 'react-router-dom';
import profile from '../image/profile.png';

const Home = () => {
  return (
    <>
    <div className='container'>
    <div className='body-page'>
    <img src={profile} alt="profile" className="profile"/>
    <div className='button-container'>
    <NavLink to='/' className='call-accept'>Accept</NavLink>
    <NavLink to='/' className='call-decline'>Decline</NavLink>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home