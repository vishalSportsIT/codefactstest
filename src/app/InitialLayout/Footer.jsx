import React, { Fragment } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

  return (
    <Fragment>
      <footer className='footer'>
        <div className="col-1">
          <div className="heading">STUDIO HUB</div>
          <div className='social-media-icons'>
             <InstagramIcon className='social-media-icon' />
             <XIcon className='social-media-icon' />
             <FacebookIcon className='social-media-icon' />
            <YouTubeIcon className='social-media-icon' />
          </div>
        </div>
        <div className="col-2">
          <div className="heading">Studio Categories</div>
          {['Photo Studio','Conference Room','Dance Studio','Recording Studio',
          'Film Studio','Corporate Events'].map((i,k)=>(
            <li key={k}>{i}</li>
          ))}
        </div>
        <div className="col-3">
        <div className="heading">Popular Locations</div>
          {['Hyderabad','Kolkata','Bangalore','Mumbai',
          'Gujarat','Kolkata'].map((i,k)=>(
            <li key={k}>{i}</li>
          ))}
        </div>
        <div className="col-4">
         <div className="heading">Stay in touch for weekly ,<br/> newsletter,travel,tips and deals</div>
         <form>
         <input id="username" name="username" type="text" placeholder="Enter Your First name" autoComplete="username"
          className="w-full block flex-1 border border-gray-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-0 sm:text-sm/6 mt-2 mb-2"
          />
          <input id="username" name="username" type="text" placeholder="Enter Your Email address" autoComplete="username"
          className="w-full block flex-1 border border-gray-300 bg-transparent pl-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-0 sm:text-sm/6 mt-2 mb-2"
           />
           <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
        </form>
        </div>
      </footer>
      <div className="text-center bg-gray-200 py-1 text-gray-700">&copy;Copyright 2024 Alokha.All rights Reserved</div>
    </Fragment>
  )
}

export default Footer;