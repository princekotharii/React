import React, { useState } from 'react';
function Loginform() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSdhBz3xYEIy_kAzj-yzRL-oVvlW60R2lTZlM7iTP2ShliOf1Q/formResponse';

    const formData = new FormData();
    formData.append('entry.1294611020', email);
    formData.append('entry.314819940', password);

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      alert('Form submitted successfully!');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="border border-red-300 m-2 p-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password</label>
        <input
          className="border border-2 m-2 p-1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Loginform;
