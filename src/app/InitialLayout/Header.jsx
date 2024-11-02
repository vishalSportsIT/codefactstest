import React, { Fragment } from 'react';
import Link from 'next/link';
import { Avatar,Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = () => {
  return (
    <Fragment>
        <header className='header'>
          <div className="heading">STUDIO HUB</div>
          <div className='nav-links'>
          <Link href="/home">Home</Link>
          <Link href="#">Categories</Link>
          <Link href="#">Contact Us</Link>
            <div className='search'>
             <SearchIcon/>
             <input placeholder='Search'/>
            </div>
            <Button  variant="contained" className='header-buttons' >List Your Studio</Button>
            <Button variant="contained"  className='header-buttons'>Book Now</Button>
            <Avatar>N</Avatar>
            <KeyboardArrowDownIcon/>
          </div>
        </header>
    </Fragment>
  )
}

export default Header;