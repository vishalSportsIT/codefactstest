"use client";
import React, { useEffect, useState } from 'react';
import HomeNavs from './HomeNavs/HomeNavs';
import { Button, DatePicker, Divider, Input, TimePicker } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import StudioCard from './StudioCard/StudioCard';
import { useAuth } from '@/context/AuthContext';
import AddStudioModal from '../components/AddStudioModal';
import { apiEndPoints } from '@/utils/config/apiEndPoints';
import { getRequest } from '@/utils/apiCaller';

const Page = () => {
  const { token } = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);
  const [studios, setStudios] = useState([]);

  const handleAddStudioClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchStudios = async () => {
      try {
        const response = await getRequest(apiEndPoints.getStudio, true);
        if (response?.data) {
          setStudios(response.data); 
        }
      } catch (error) {
        console.error("Failed to fetch studios", error);
      }
    };

    fetchStudios();
  }, []);

  return (
    <div className='home mx-3 my-5'>
      <div className='home-navs'>
        <HomeNavs />
      </div>
      <div className='categories-navs px-2 my-2'>
        {['All', 'Photo Studio', 'Conference Room', 'Dance Studio', 'Recording Studio', 'Film Studio', 'Corporate Events'].map((category, index) => (
          <li key={index} className='mx-2'>
            <Button>{category}</Button>
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
            {['Camera SetUp', 'Back Drops', 'Grip Equipment', 'Sound Equipment', 'Editing Equipment', 'Props and Furniture'].map((item, index) => (
              <li key={index}>
                <input type="checkbox" id={item} name={item} value={item} className='mr-5'/>
                <label htmlFor={item}>{item}</label>
              </li>
            ))}
          </div>
        </div>
        <div className="content-bar">
          {studios.map((studio, index) => (
            <StudioCard key={index} studio={studio} /> 
          ))}
        </div>
      </div>
      <AddStudioModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Page;
