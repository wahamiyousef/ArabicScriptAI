import React, { useState, useEffect } from "react";
import pb from '../utils/pocketbase'

function Letter({ onLetterChange }) {
  const [letter, setLetter] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the specific record from PocketBase
        const record = await pb.collection('alphabet').getOne('enbhiu4yr86ugot');
        
        // Randomly select a letter from the alphabet array
        const randInt = Math.floor(Math.random() * record.json.alphabet.length);
        
        setLetter(record.json.alphabet[randInt].letter);
        setSound(record.json.alphabet[randInt].sound);

        onLetterChange(record.json.alphabet[randInt].letter);
        //console.log('A: '+ record.json.alphabet[randInt].letter)

        console.log(record.json.alphabet[randInt].letter);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error:", error.message, error.stack);
      }
    };

    fetchData();
  }, [onLetterChange]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Write the letter: '{sound}'</h1>
      {/*<p style={{ fontSize: '5rem', textAlign: 'center' }}>{letter}</p>*/}
    </div>
  );
}

export default Letter;