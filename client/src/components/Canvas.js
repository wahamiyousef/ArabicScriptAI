import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';

const Canvas = () => {

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
    //console.log("bye"+image)
  /*
    if (image != null) {
      const data = new FormData();
      //console.log("bye"+image)
      data.append('file_to_upload', image);
      //console.log("hi"+data)

      let response = await fetch('http://127.0.0.1:8080/api/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      /*
      let res = await response.json();
      if (res.status !== 1){
        alert('Error uploading file');
      }
        
      console.log(await response.json());
    }
    */

    
    const Upload = async () => {
      const data = new FormData();
      //console.log("TYPE: "+typeof(image))
      //data.append('file_to_upload', "https://cdn.discordapp.com/attachments/502568556999999518/1265758623930515569/image.png?ex=66a2ad14&is=66a15b94&hm=bfd682f8ab6324c35b6b8302022a5d34b8d1769c21722f855de7923b4b4fae9f&");
      //console.log(data)
      
      const blob = new Blob([image], {type : 'text/plain'})
      data.append('file_to_upload', blob, 'file.txt')
      console.log(data)
      //console.log(data)

      const response = await fetch('http://127.0.0.1:8080/api/upload', {
        method: 'POST',
        body: data
      })
      /*.then(resp => {
        resp.json().then(data => {console.log(data)})
        console.log(data)
      })
        */
      const result = await response.json();
      console.log(result.text);
      //console.log(typeof(result.text));
      setLetter(result.text);
    }
    Upload();
    

    //document.body.appendChild(image);
    
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