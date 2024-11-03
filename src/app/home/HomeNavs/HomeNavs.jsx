"use client"
import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { DatePicker, TimePicker } from 'antd';
import { Input } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';

const HomeNavs = () => {
  return (
    <div className='home-navs-container my-2'>
        <div className="heading">Studios</div>
          <div className='nav-links'>
            <div className='search'>
            <Input placeholder="Enter location" prefix={<EnvironmentOutlined />} />
            </div>
            <div className='search'>
            <DatePicker placeholder="Select Date" />
            </div>
            <div className='search'>
            <TimePicker  placeholder="Select Time" format="HH:mm" />
            </div>
            <div className='search'>
            <TimePicker  placeholder="Select Time" format="HH:mm"/>
            </div>
          </div>
    </div>
  )
}

export default HomeNavs