 import React, { useState } from 'react';
import '../Home/SubscriptionForm.css'

const SubscriptionForm = () => {
    const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log('Subscribing email:', email);
    if (email.trim() === '') {
        setError('Please provide a valid email.');
        return;
    }
    try {
        // Simulate API call for subscription processing
        await subscribeUser();
        setSubscribed(true);
      } catch (err) {
        setError('An error occurred. Please try again later.');
      }
    };
  
    const subscribeUser = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    };

  

 

  return (
    <div>
      <h3 className='newsletter-heading'>Subscribe to Our Newsletter</h3>
      {subscribed ? (
        <p className="success-message">Subscribed successfully!</p>
      ) : (
      <form className='newsletter-form' onSubmit={handleSubmit}>
        <input
        className='newsletter-input'
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button className='newsletter-btn' type="submit">Subscribe</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      )}
    </div>
  );
};

export default SubscriptionForm; 




