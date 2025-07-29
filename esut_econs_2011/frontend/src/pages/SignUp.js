import React, { useState } from 'react';
import api from '../api';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    reg_number: '',
    nickname: '',
    dob: '',
    address: '',
    residential_base: '',
    phone_number: '',
    reference_name: '',
    reference_number: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('accounts/users/', formData);
      alert('Registered successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <input name="reg_number" placeholder="Reg Number" onChange={handleChange} />
      <input name="nickname" placeholder="Nickname" onChange={handleChange} />
      <input name="dob" placeholder="Date of Birth" type="date" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="residential_base" placeholder="Residential Base" onChange={handleChange} />
      <input name="phone_number" placeholder="Phone Number" onChange={handleChange} />
      <input name="reference_name" placeholder="Reference Name" onChange={handleChange} />
      <input name="reference_number" placeholder="Reference Number" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}
