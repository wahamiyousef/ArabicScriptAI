import React, { useState, useEffect } from 'react';
import StreakImg from '../fire.svg';

const Streak = () => {
  const [score, setScore] = useState(0);

  const saveScoreToCookies = (score) => {
    document.cookie = `streak=${score}; SameSite=None; Secure`;
  };

  const getScoreFromCookies = () => {
    const cookies = document.cookie.split('; ');
    const scoreCookie = cookies.find(cookie => cookie.startsWith('streak='));
    return scoreCookie ? parseInt(scoreCookie.split('=')[1], 10) : 0;
  };

  const handleClearScore = () => {
    setScore(0);
  };

  const incrementScore = () => {
    setScore(prevScore => {
      const newScore = prevScore + 1;
      saveScoreToCookies(newScore); // Save to cookies immediately
      return newScore;
    });
  };

  const decrementScore = () => {
    setScore(prevScore => {
      const newScore = prevScore - 1;
      saveScoreToCookies(newScore); // Save to cookies immediately
      return newScore;
    });
  };
  const resetScore = () => {
    setScore(0)
  }

  useEffect(() => {
    // Automatically show the stored score when the component mounts
    const savedScore = getScoreFromCookies();
    setScore(savedScore);

    // Clear the displayed score when the component unmounts
    return () => {
      handleClearScore();
    };
  }, []);

  useEffect(() => {
    // Debugging useEffect to see score updates
    console.log(`Score updated: ${score}`);
  }, [score]);

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <img src={StreakImg} style={{ marginRight: '10px' }} />
        {/*
        <button onClick={incrementScore}>Increment Score</button>
        <button onClick={decrementScore}>Decrement Score</button>
        */}
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Streak;
