import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';

const Canvas = ({ lang }) => {

  const canvasReference = useRef(null);
  const contextReference = useRef(null);

  const [isPressed, setIsPressed] = useState(false);
  const [letter, setLetter] = useState('');

  const clearCanvas = () => {
    const canvas = canvasReference.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const beginDraw = (e) => {
    contextReference.current.beginPath();
    contextReference.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsPressed(true);
  };

  const updateDraw = (e) => {
    if (!isPressed) return;

    contextReference.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    contextReference.current.stroke();
  };

  const endDraw = () => {
    contextReference.current.closePath();
    setIsPressed(false);
  };

  useEffect(() => {
    const canvas = canvasReference.current;

    //canvas.width = 800;
    //canvas.height = 800;
    canvas.width = 600;
    canvas.height = '600';


    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.lineWidth = 15;
    contextReference.current = context;
  }, []);

  const getImage = () => {
    const canvas = document.getElementById("canvas");
    let image = new Image();

    const dataURL = canvas.toDataURL();
    image = dataURL
    //image.src = dataURL
    // this would mean <img src=dataURL>
    /*
    const canvas = canvasReference.current;
    //const image = new Image();
    //image.src = canvas.toDataUrl();
    //return image;
    const dataURL = canvas.toDataUrl();
    const context = canvas.getContext("2d");
    const src = URL.createObjectURL(context);
    */
    //setImage(dataURL);
    //const src = URL.createObjectURL(image);

    console.log(image)
    return image
  }



  const submitCanvas = async () => {
    const image = await getImage();

    const Upload = async () => {
      const data = new FormData();
      
      const blob = new Blob([image], {type : 'text/plain'})
      data.append('file_to_upload', blob, 'file.txt')
      console.log(data)
      const response = await fetch('http://127.0.0.1:8080/api/upload/arabic', {
        method: 'POST',
        body: data
      })
      console.log(lang)

      /*
      response = await fetch('http://127.0.0.1:8080/api/upload/english', {
        method: 'POST',
        body: data
      })
      */
      

      const result = await response.json();
      console.log(result.text);
      setLetter(result.text);
    }
    Upload();
    
  }
  

  return (
    <div /*style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}*/>

      <canvas
        id="canvas"

        style={{ 
          backgroundColor: 'white',
          border: `${2 * 10}px solid #0000`,
          outline: '1px solid #000',
          outlineOffset: `-${10}px`,
          border: 'solid 25px white',
          boxShadow: '3px 8px 15px #333333',
        }}

        ref={canvasReference}
        onMouseDown={beginDraw}
        onMouseMove={updateDraw}
        onMouseUp={endDraw}
      />

      <div>
        {letter != null
          ? <p>You wrote: {letter}</p>
          : <p>Loading...</p>
        }
      </div>

      <div className="buttons" style={{ display: 'flex', flexDirection: 'row', gap: '80%' }}>
        <Button variant='clear' style={{float:'left'}} onClick={clearCanvas}>Clear</Button>
        <Button variant='submit' onClick={submitCanvas}>Submit</Button>
      </div>

    </div>
  );
};

export default Canvas;