import React, { useState, useEffect } from "react";


function EnglishWords() {
  const [word, setWord] = useState(null);
  const [arabic, setArabic] = useState(null);

  useEffect(() => {
    const randInt = Math.floor(Math.random() * 2);
    fetch("http://localhost:8080/api/english", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setWord(data.words[randInt].word);
        setArabic(data.words[randInt].arabic);
        //console.log("Log: "+JSON.stringify(data.alphabet));
        console.log(data.words[randInt].word);
        console.log(data.words[randInt].arabic);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}> "  اكتب الرسالة " {arabic}</h1>
    </div>
  );
}

export default EnglishWords;