"use client"
import React, { Fragment, useState } from 'react';
import HomeNavs from './HomeNavs/HomeNavs';
import { Button, DatePicker, Divider, Input, TimePicker } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import StudioCard from './StudioCard/StudioCard';
import { useAuth } from '@/context/AuthContext';
import AddStudioModal from '../components/AddStudioModal';

const Page = () => {
  const { token } = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleAddStudioClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='home mx-3 my-5'>
      <div className='home-navs'> <HomeNavs/> </div>
      <div className='categories-navs px-2 my-2'>
        {['All', 'Photo Studio', 'Conference Room', 'Dance Studio', 'Recording Studio', 'Film Studio', 'Corporate Events'].map((i, k) => (
          <li key={k} className='mx-2'>
            <Button>{i}</Button>
          </li>
        ))}
        {token && (
          <span style={{ marginLeft: '20vw', backgroundColor: 'maroon', color: 'white', padding: '10px' }}>
            <button onClick={handleAddStudioClick} variant="contained">Add Studio</button>
          </span>
        )}
      </div>
      <div className='content-box mx-3 mt-6'>
        <div className="side-bar px-3 py-3">
          <Input placeholder="Enter location" prefix={<EnvironmentOutlined />} />
          <DatePicker placeholder="Select Date" />
          <div className='timer-box'>
            <TimePicker placeholder="Select Time" format="HH:mm" />
            <TimePicker placeholder="Select Time" format="HH:mm" />
          </div>
          <Divider style={{ borderColor: 'grey', margin: '0', padding: '0' }} />
          <div><h1>Price</h1></div>
          <Divider style={{ borderColor: 'grey', margin: '0', padding: '0' }} />
          <div><h1>Ratings</h1></div>
          <Divider style={{ borderColor: 'grey', margin: '0', padding: '0' }} />
          <div><h1>Amenities</h1></div>
          <Divider style={{ borderColor: 'grey', margin: '0', padding: '0' }} />
          <div className='d-flex'>
            <h1 className='mb-5'>Equipment</h1>
            {['Camera SetUp', 'Back Drops', 'Grip Equipment', 'Sound Equipment', 'Editing Equipment', 'Props and Furniture'].map((i, k) => (
              <li key={k}>
                <input type="checkbox" id={i} name={i} value={i} className='mr-5'/>
                <label htmlFor={i}>{i}</label>
              </li>
            ))}
          </div>
        </div>
        <div className="content-bar">
          <StudioCard />
          <StudioCard />
          <StudioCard />
          <StudioCard />
        </div>
      </div>
      <AddStudioModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
}

export default Page;
