import React, { useEffect, useRef, useState } from 'react';

const ImageCanvas = ({ portrait, text }) => {
  const [isBoxLoaded, setBoxLoaded] = useState<boolean>(false);
  const canvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const box: React.MutableRefObject<any> = useRef(null);
  let ctx: CanvasRenderingContext2D;

  // Hacky way of preserving aspect ratios -- refactor this so it's more dynamic!
  const boxHeight: number = 135;
  const boxRatio: number = 800 / 226;
  const boxWidth: number = boxHeight * boxRatio;

  // preps the canvas upon each render by creating a 2D "drawing context" for it
  // TODO: Does a new context need to be drawn on EVERY render? 
  // Passing in a dependency makes it seem like it, considering the error message. Look into this...
  useEffect(() => ctx = canvas.current.getContext('2d'));

  useEffect(() => {
    // ctx.fillStyle = '#000000';
    // ctx.fillText(text, 320, 370);
    ctx.fillStyle = '#FFFFFF';
    return ctx.fillText(text, 320, 370);
  }, [text])

  const draw = (image, x, y, w, h) => {
    ctx.clearRect(x, y, w, h);
    ctx.drawImage(image, x, y, w, h);
    return isBoxLoaded ? ctx.drawImage(box.current, 240, 295, boxWidth, boxHeight) : null;
  }

  return (
    <div>
      <canvas 
        ref={canvas} 
        id='canvas'
        width='800' 
        height='450' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      {/* NOTE: We're rendering portrait and box img tags so they can be referenced for the canvas.
      They will be hidden via the stylesheet */}
      <img 
        ref={character} 
        id='portrait' 
        onLoad={() => draw(character.current, 20, 130, 320, 320)} 
        src={portrait} 
        className='hidden' 
      />
      <img ref={box} 
        id='box'
        src={'../images/dialoguebox.png'} 
        // Ensure box is loaded so we know it can be drawn on top of portrait
        onLoad={(() => setBoxLoaded(true))}
        className='hidden' 
      />
    </div>
  )
}

export default ImageCanvas;