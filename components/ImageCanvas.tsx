import React, { useEffect, useRef, useState } from 'react';
import { simplePositions, findSpecialPosition } from '../utils/portraitPositions';
import FontFaceObserver from 'fontfaceobserver';

const ImageCanvas = ({ portrait, name, text, font, char, emote, costume, box }) => {
  const loadedFont = new FontFaceObserver(`${font}`);
  
  const portraitCanvas: React.MutableRefObject<any> = useRef(null);
  const boxCanvas: React.MutableRefObject<any> = useRef(null);
  const tileCanvas: React.MutableRefObject<any> = useRef(null);
  const nameCanvas: React.MutableRefObject<any> = useRef(null);
  const textCanvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const dialogueBox: React.MutableRefObject<any> = useRef(null);
  let pCtx: CanvasRenderingContext2D;
  let bCtx: CanvasRenderingContext2D;
  let tileCtx: CanvasRenderingContext2D;
  let nCtx: CanvasRenderingContext2D;
  let tCtx: CanvasRenderingContext2D;
  let textObj: any; // "any" gets around a TS bug that says a fontBoundingBoxAscent property doesn't exist for a TextMetrics obj

  useEffect(() => {
    // Initialize tile canvas
    tileCtx = tileCanvas.current.getContext('2d');
    tileCtx.rotate(-14.75 * Math.PI / 180);

    // Initialize name canvas
    nCtx = nameCanvas.current.getContext('2d');
    nCtx.textAlign = 'center';
    nCtx.rotate(-14.75 * Math.PI / 180);
  }, []) // Empty dependency means it only runs on first render

  useEffect(() => {
    // Initialize name canvas
    nCtx = nameCanvas.current.getContext('2d');
    nCtx.font = `18pt ${font}`;
    nCtx.fillStyle = '#000000';

    // Initialize tile canvas
    tileCtx = tileCanvas.current.getContext('2d');
    tileCtx.clearRect(0, 0, 1275, 500);
    //Draw tile behind second to last character in name
    // Use font ascent/descent for top/bottom
    // Use actual left/right for left/right

    loadedFont.load().then(() => {
      if (name.length > 2) {
        const wholeObj = nCtx.measureText(name);
        const leftSide = wholeObj.actualBoundingBoxLeft;
        textObj = nCtx.measureText(name[0]);
        tileCtx.fillRect(418 - leftSide, 438 - textObj.fontBoundingBoxDescent, 
          textObj.actualBoundingBoxLeft + textObj.actualBoundingBoxRight, 
          textObj.fontBoundingBoxAscent + textObj.fontBoundingBoxDescent);
      }
      nCtx.clearRect(0, 0, 1275, 500);
      nCtx.fillText(name, 418, 438); // Y coordinate is hardcoded because it isn't changing for P5/P5R box
    });

  }, [name, font])

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

  const drawPortrait = (charImage: CanvasImageSource, portraitXY: number[], w: number, h: number) => {
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
    // Edge cases: A few Haru and Sophia P5S portraits need to be drawn wider
    if (costume === 'Humanity\'s Companion') w = 580;
    if (char === 'Haru') {
      if (costume === 'Swimsuit (Okinawa)' || costume === 'Road Trip (Hat)') {
        w = 570;
      }
    }
    pCtx.drawImage(charImage, x, y, w, h);
    return;
  };

  const drawBox = (boxImage: CanvasImageSource) => {
    // Initialize box canvas, clear current box and draw new box
    bCtx = boxCanvas.current.getContext('2d');
    const width: number = boxImage.width as number;
    const height: number = boxImage.height as number;
    // For particularly tall boxes, determine the number of pixels to offset the Y coordinate where it's drawn
    const heightOffset: number = height - 250;
    bCtx.clearRect(0, 0, 1275, 500);
    bCtx.drawImage(boxImage, 320, 250 - heightOffset, width, height);
    /*
    TODO: When name equals something actually in game, load in existing dialogue box?
    (i.e. when user types "Ann," the existing Ann box appears so that way we aren't randomly
    generating black boxes for that name and it appears how it does within the game)
    */
    return;
  };

  return (
    <main id='canvasDiv'>
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
        ref={tileCanvas} 
        id='tileCanvas'
        width='1275' 
        height='500' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={nameCanvas} 
        id='nameCanvas'
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
        alt='Potrait'
        ref={character}
        id='portrait'
        className='hidden'
        src={portrait}
        crossOrigin="anonymous"
        onLoad={() => drawPortrait(character.current, simplePositions[char], 500, 500)}
      />
      <img
        alt='Dialogue box'
        ref={dialogueBox}
        id='box'
        className='hidden'
        src={box}
        crossOrigin="anonymous"
        onLoad={() => drawBox(dialogueBox.current)}
      />
    </main>
  );
};

export default ImageCanvas;