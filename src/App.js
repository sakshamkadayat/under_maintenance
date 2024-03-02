import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Set the launch date (YYYY-MM-DD HH:MM:SS)
  const launchDate = new Date('2024-03-01T00:00:00').getTime();

  // State for countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    launched: false
  });

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state
      setCountdown({ days, hours, minutes, seconds, launched: distance < 0 });

      // If the launch date has passed, clear the timer
      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="App">
      <div className="container">
        <h1>Website Under Construction</h1>
        <p>We're working hard to bring you an amazing new website. Stay tuned!</p>
        {countdown.launched ? (
          <div className="countdown">Website  Under Construction</div>
        ) : (
          <div className="countdown">
            <div>{countdown.days}d</div>
            <div>{countdown.hours}h</div>
            <div>{countdown.minutes}m</div>
            <div>{countdown.seconds}s</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
