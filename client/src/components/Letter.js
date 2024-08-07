import React, { useState, useEffect } from "react";


function Letter() {
  const [letter, setLetter] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const randInt = Math.floor(Math.random() * 28);
    fetch("http://localhost:8080/api/letters", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setLetter(data.alphabet[randInt].letter);
        setSound(data.alphabet[randInt].sound);
        //console.log("Log: "+JSON.stringify(data.alphabet));
        console.log(data.alphabet[randInt].letter);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Write the letter: '{sound}'</h1>
      {/*letter && <p>{letter}</p>*/}
    </div>
  );
}

export default Letter;