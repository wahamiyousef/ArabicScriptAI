import React, { useRef, useState, useEffect } from 'react';

const Canvas = () => {

  const canvasReference = useRef(null);
  const contextReference = useRef(null);

  const [isPressed, setIsPressed] = useState(false);

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

    canvas.width = 800;
    canvas.height = 800;

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
    console.log("bye"+image)
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
      //console.log(typeof(image))
      data.append('file_to_upload', "https://cdn.discordapp.com/attachments/502568556999999518/1265758623930515569/image.png?ex=66a2ad14&is=66a15b94&hm=bfd682f8ab6324c35b6b8302022a5d34b8d1769c21722f855de7923b4b4fae9f&");
      await fetch('http://127.0.0.1:8080/api/upload', {
        method: 'POST',
        body: data
      }).then(resp => {
        resp.json().then(data => {console.log(data)})
      })
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
        style={{ backgroundColor: 'red' }}

        ref={canvasReference}
        onMouseDown={beginDraw}
        onMouseMove={updateDraw}
        onMouseUp={endDraw}
      />
      

      <div className="buttons">
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={submitCanvas}>Submit</button>
      </div>

    </div>
  );
};

export default Canvas;