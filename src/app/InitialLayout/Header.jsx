"use client";
import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAuth } from '@/context/AuthContext'; 

const Header = () => {
  const { token, logout ,user} = useAuth(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  return (
    <Fragment>
      <header className='header'>
        <div className="heading">STUDIO HUB</div>
        <div className='nav-links'>
          <Link href="/home">Home</Link>
          <Link href="#">Categories</Link>
          <Link href="#">Contact Us</Link>
          <div className='search'>
            <SearchIcon />
            <input placeholder='Search' />
          </div>
          {token ? (
            <>
              <Button variant="contained" className='header-buttons'>List Your Studio</Button>
              <Button variant="contained" className='header-buttons'>Book Now</Button>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div onClick={() => setDropdownOpen(prev => !prev)} style={{ cursor: 'pointer' }}>
                <KeyboardArrowDownIcon />
              </div>
              {dropdownOpen && (
                <div className="dropdown">
                  <Button onClick={logout} variant="contained" className='logout-button'>Logout</Button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="contained" className='header-buttons'>Login</Button>
              </Link>
              <Link href="/signUp">
                <Button variant="contained" className='header-buttons'>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
