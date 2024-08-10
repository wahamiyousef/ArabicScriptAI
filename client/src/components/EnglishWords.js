import React, { useState, useEffect } from "react";
import pb from '../utils/pocketbase'

function EnglishWords() {
  const [word, setWord] = useState(null);
  const [arabic, setArabic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the specific record from PocketBase
        const record = await pb.collection('alphabet').getOne('5xj955bygaik9yg');
        
        // Randomly select a letter from the alphabet array
        const randInt = Math.floor(Math.random() * record.json.words.length);
        
        setWord(record.json.words[randInt].word);
        setArabic(record.json.words[randInt].arabic);

        console.log(record.json.words[randInt].letter);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error:", error.message, error.stack);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}> "  اكتب الرسالة " {arabic}</h1>
    </div>
  );
}

export default EnglishWords;