
import React, { useState } from 'react';

const UserDataCapture = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h2>User Data Capture</h2>
      <form>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </form>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserDataCapture;
