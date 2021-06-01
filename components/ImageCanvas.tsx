import React, { useEffect, useRef } from 'react';
import { simplePositions, findSpecialPosition } from '../utils/portraitPositions';

const ImageCanvas = ({ portrait, text, font, char, emote, costume }) => {
  const portraitCanvas: React.MutableRefObject<any> = useRef(null);
  const boxCanvas: React.MutableRefObject<any> = useRef(null);
  const textCanvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const box: React.MutableRefObject<any> = useRef(null);
  let pCtx: CanvasRenderingContext2D;
  let bCtx: CanvasRenderingContext2D;
  let tCtx: CanvasRenderingContext2D;

  useEffect(() => {
    // Initialize text canvas and clear current text
    tCtx = textCanvas.current.getContext('2d');
    tCtx.fillStyle = '#FFFFFF';
    tCtx.font = `18pt ${font}`;
    tCtx.clearRect(0, 0, 1275, 500);

    // Draw or redraw text
    const rows = text.split('\n');
    if (rows[1] === undefined) rows[1] = '';
    if (rows[2] === undefined) rows[2] = '';
    if (rows[0] && rows[1] && !rows[2]) {
      // Centers text in two-line dialogue boxes
      tCtx.fillText(rows[0], 500, 387);
      tCtx.fillText(rows[1], 500, 417);
      return;
    }
    tCtx.fillText(rows[0], 500, 373);
    tCtx.fillText(rows[1], 500, 403);
    tCtx.fillText(rows[2], 500, 433);
    return;
  }, [text, font]);

  const drawPortrait = (charImage: CanvasImageSource, portraitXY: [number, number], w: number, h: number) => {
    // Initialize portrait canvas and clear current portrait
    pCtx = portraitCanvas.current.getContext('2d');
    pCtx.clearRect(0, 0, 1275, 500);

    // Look up draw position for requested portrait and draw new portrait
    let x;
    let y;
    if (!simplePositions[char]) {
      const specialPosition = findSpecialPosition(char, emote, costume);
      x = specialPosition[0];
      y = specialPosition[1];
    } else {
      x = portraitXY[0];
      y = portraitXY[1];
    }
    pCtx.drawImage(charImage, x, y, w, h);
    return;
  };

  const drawBox = (boxImage: CanvasImageSource) => {
    // Initialize box canvas, clear current box and draw new box
    bCtx = boxCanvas.current.getContext('2d');
    bCtx.clearRect(0, 0, 1275, 500);
    bCtx.drawImage(boxImage, 320, 250, 950, 250);
    return;
  };

  return (
    <div id='canvasDiv'>
      <canvas 
        ref={portraitCanvas} 
        id='portraitCanvas'
        width='1275' 
        height='500' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={boxCanvas} 
        id='boxCanvas'
        width='1275' 
        height='500' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={textCanvas} 
        id='textCanvas'
        width='1275' 
        height='500' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      {/* NOTE: We're rendering portrait and box img tags so they can be referenced for the canvas.
      They will be hidden via the stylesheet */}
      <img
        ref={character}
        id='portrait'
        onLoad={() => drawPortrait(character.current, simplePositions[char], 500, 500)}
        src={portrait}
        className='hidden'
      />
      <img 
        ref={box}
        id='box'
        src={`../images/boxes/db-${char}-${font}.png`}
        className='hidden'
        onLoad={() => drawBox(box.current)}
      />
    </div>
  );
};

export default ImageCanvas;