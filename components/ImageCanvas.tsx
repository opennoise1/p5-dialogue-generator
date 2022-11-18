import React, { useEffect, useRef } from 'react';
import { simplePositions, findSpecialPosition } from '../utils/portraitPositions';
import { findNameBox } from '../utils/findNameBox';
import FontFaceObserver from 'fontfaceobserver';

const ImageCanvas = ({ portrait, name, text, font, char, emote, costume, box, setBox }) => {
  const loadedFont = new FontFaceObserver(`${font}`);
  
  const portraitCanvas: React.MutableRefObject<any> = useRef(null);
  const boxCanvas: React.MutableRefObject<any> = useRef(null);
  const tileCanvas: React.MutableRefObject<any> = useRef(null);
  const nameCanvas: React.MutableRefObject<any> = useRef(null);
  const textCanvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const dialogueBox: React.MutableRefObject<any> = useRef(null);
  let random: number;
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
    nCtx.textAlign = 'left';
    nCtx.rotate(-14.75 * Math.PI / 180);
  }, []) // Empty dependency means it only runs on first render

  useEffect(() => {
    // Initialize name and tile canvases
    nCtx = nameCanvas.current.getContext('2d');
    nCtx.font = `18pt ${font}`;
    nCtx.clearRect(0, 0, 1275, 500);
    
    // Initialize tile canvas
    tileCtx = tileCanvas.current.getContext('2d');
    tileCtx.clearRect(0, 0, 1275, 500);

    // Measure entire name
    const nameObj = nCtx.measureText(name);

    // Check to see if current name has a pre-exisiting box
    let hasBox: string | null = findNameBox(name);
    if (hasBox && (font === 'KoreanKRSM' || font === 'Optima nova LT')) {
      // If so, use the box and return.
      setBox(`./images/boxes/db-${hasBox}-${font}.png`)
      return;
    } else {
      // Otherwise use the blank box and draw the name
      // TODO: Check the size of name and adjust size of box if necessary
      setBox('./images/db@2x.png');
    }
    
    // Edge case: If name is just whitespace, we won't enter the loop so it doesn't run infinitely
    if (name.trim()) {
      // Choose a random character from the name.
      // If the character chosen is a blank space, choose again
      do {
        random = Math.floor(Math.random() * name.length);
      } while (name[random] === ' ');
    } else { 
      random = null; 
    }

    // Split name into multiple substrings so we can change
    // the color of the character over the black tile
      let beforeBox: string = name.substring(0, random);
      let behindBox: string = name.substring(random, random + 1);
      let afterBox: string = name.substring(random + 1);
    
    loadedFont.load().then(() => {

      // Find the leftmost coordinate of the name on the canvas 
      let boxDrawX = 418 - nameObj.width / 2; // TODO: change 418 to a variable that represents the center of each dialogue box name area

      // Edge case: No black boxes for single character names or whitespace-only names
      if (name.length > 1 && name.trim()) {
        // Loop through name to find where we should
        // start drawing the box behind the randomly chosen character
        for (let i = 0; i < random; i++) {
          textObj = nCtx.measureText(name[i]);
          boxDrawX += textObj.width;
        };

        textObj = nCtx.measureText(name[random]);
        tileCtx.fillRect(
          boxDrawX,
          438 - textObj.fontBoundingBoxAscent,
          textObj.width,
          textObj.fontBoundingBoxAscent + textObj.fontBoundingBoxDescent
        );
      // Edge case: Draw entire name, if one character
      } else if (name.length === 1) { 
        nCtx.fillStyle = '#000000';
        nCtx.fillText(name, 418, 438);
        return;
      }
      
      nCtx.fillStyle = '#000000';
      nCtx.fillText(beforeBox, 418 - nameObj.width / 2, 438); // TODO: change 438 to a variable that represents the Y coordinate of each dialogue box name area
      nCtx.fillStyle = '#FFFFFF'; // White text appears on black tile
      textObj = nCtx.measureText(beforeBox);
      nCtx.fillText(behindBox, 418 - (nameObj.width / 2) + textObj.width, 438);
      nCtx.fillStyle = '#000000';
      textObj = nCtx.measureText(name[random]); 
      nCtx.fillText(afterBox, boxDrawX + textObj.width, 438);

      return;
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