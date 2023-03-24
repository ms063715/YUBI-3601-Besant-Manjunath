import React, { useState } from 'react';

const Screen2 = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === '9999') {
      onSubmit({ otp });
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='OTP'>Enter OTP</h2>
      <h4 className='terms'>We have send One Time Password to your Mobile Number/Email</h4>
      <label>OTP</label>
      <input type="text" value={otp} placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Screen2;
