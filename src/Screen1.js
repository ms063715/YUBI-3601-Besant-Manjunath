import React, { useState } from 'react';

const Screen1 = ({ onSubmit }) => {
  const [mobile, setMobile] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile ) {
      onSubmit({ mobile});
    } else {
      alert('Please enter valid mobile and email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="content">
      <h1 className='Get'>Get Started</h1>
      <label>Mobile/Email</label>
      <input type="text" value={mobile} Placeholder="Enter Mobile Number/Email" onChange={(e) => setMobile(e.target.value)} />
      <h4 className='terms'>*By Continuing,you agree to Terms and Polices.</h4>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Screen1;
