"use client"
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postRequest } from '@/utils/apiCaller';
import { apiEndPoints } from '@/utils/config/apiEndPoints';

const { TextArea } = Input;

const AddStudioModal = ({ isVisible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    setLoading(true);  // Ensure the loading state is set

    const formData = new FormData();
  
    for (const key in values) {
      if (key === 'image' && values[key]?.[0]?.originFileObj) {
        formData.append(key, values[key][0].originFileObj);
      } else if (key !== 'image') {
        formData.append(key, values[key]);
      }
    }
  
    try {
      console.log('Submitting form data:', formData);

      const res = await postRequest(apiEndPoints.addStudio, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', res);

      if (res.status === 201) {
        form.resetFields();
        onClose();
      }
    } catch (error) {
      console.error('Failed to add studio:', error);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <Modal
      title="Add Studio"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the studio name' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please enter the location' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter a description' }]}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Pricing" name="pricing" rules={[{ required: true, message: 'Please enter the pricing' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Availability" name="availability" rules={[{ required: true, message: 'Please specify availability' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Contact Info" name="contactInfo" rules={[{ required: true, message: 'Please enter contact info' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category' }]}>
          <Select>
            <Select.Option value="Photo Studio">Photo Studio</Select.Option>
            <Select.Option value="Conference Room">Conference Room</Select.Option>
            <Select.Option value="Dance Studio">Dance Studio</Select.Option>
            <Select.Option value="Recording Studio">Recording Studio</Select.Option>
            <Select.Option value="Film Studio">Film Studio</Select.Option>
            <Select.Option value="Corporate Events">Corporate Events</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please upload an image' }]}>
          <Upload maxCount={1} beforeUpload={() => false} listType="picture">
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Studio
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddStudioModal;
