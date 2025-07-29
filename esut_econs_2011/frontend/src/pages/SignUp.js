import React, { useState } from 'react';
import api from '../api';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    reg_number: '',
    nickname: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('accounts/users/', formData);
    alert('Registered!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <input name="reg_number" onChange={handleChange} />
      <input name="nickname" onChange={handleChange} />
      <button>Sign Up</button>
    </form>
  );
}
