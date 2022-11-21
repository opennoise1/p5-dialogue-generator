import React, { useEffect, useRef } from 'react';
import { simplePositions, findSpecialPosition } from '../utils/portraitPositions';
import { findNameBox } from '../utils/findName';
import { findRandomNumbers } from '../utils/drawNameAndBox';
import FontFaceObserver from 'fontfaceobserver';

const ImageCanvas = ({ portrait, name, text, font, char, custom, emote, costume, box, setBox }) => {
  const loadedFont = new FontFaceObserver(`${font}`);
  
  const portraitCanvas: React.MutableRefObject<any> = useRef(null);
  const boxCanvas: React.MutableRefObject<any> = useRef(null);
  const tileCanvas: React.MutableRefObject<any> = useRef(null);
  const nameCanvas: React.MutableRefObject<any> = useRef(null);
  const textCanvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const customChar: React.MutableRefObject<any> = useRef(null);
  const dialogueBox: React.MutableRefObject<any> = useRef(null);
  let random: number;
  let secondRandom: number;
  let thirdRandom: number;
  let textX: number = 418;
  let textY: number = 438;
  let pCtx: CanvasRenderingContext2D;
  let bCtx: CanvasRenderingContext2D;
  let tileCtx: CanvasRenderingContext2D;
  let nCtx: CanvasRenderingContext2D;
  let tCtx: CanvasRenderingContext2D;
  let textObj: any; // "any" gets around a TS bug that says a fontBoundingBoxAscent property doesn't exist for a TextMetrics obj
  let nameObj: any;

  useEffect(() => {
    // Initialize tile canvas
    tileCtx = tileCanvas.current.getContext('2d');
    tileCtx.rotate(-14.65 * Math.PI / 180);

    // Initialize name canvas
    nCtx = nameCanvas.current.getContext('2d');
    nCtx.textAlign = 'left';
    nCtx.rotate(-14.65 * Math.PI / 180);
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
    nameObj = nCtx.measureText(name);

    // Check to see if current name has a pre-exisiting box
    let charWithBox: string | null = findNameBox(name);
    if (charWithBox && (font === 'KoreanKRSM' || font === 'Optima nova LT')) {
      // If so, use the box and return.
      setBox(`./images/boxes/db-${charWithBox}-${font}.png`)
      return;
    } else {
      // If not, draw a blank box depending on the size of the name.
      if (nameObj.width <= 195) { setBox('./images/db-small.png'); textX = 418; }
      else if (nameObj.width > 195 && nameObj.width <= 275) { setBox('./images/db-medium.png'); textX = 456; }
      else { setBox('./images/db-large.png'); textX = 495; }
    }

    const randomNumbers = findRandomNumbers(name);
    random = randomNumbers[0];
    secondRandom = randomNumbers[1];
    thirdRandom = randomNumbers[2];

    // Split name into multiple substrings so we can change
    // the color of the character over the black tile
    let beforeBox: string = name.substring(0, random);
    let behindBox: string = name.substring(random, random + 1);
    let afterBox: string = name.substring(random + 1);
    
    let secondBehindBox: string;
    let secondAfterBox: string;
    let thirdBehindBox: string;
    let thirdAfterBox: string;

    if (name.length >= 8) {
      afterBox = name.substring(random + 1, secondRandom);
      secondBehindBox = name.substring(secondRandom, secondRandom + 1);
      secondAfterBox = name.substring(secondRandom + 1);

      if (name.length >= 16) {
        secondAfterBox = name.substring(secondRandom + 1, thirdRandom);
        thirdBehindBox = name.substring(thirdRandom, thirdRandom + 1);
        thirdAfterBox = name.substring(thirdRandom + 1);
      }
    }

    console.log(beforeBox, behindBox, afterBox, secondBehindBox, secondAfterBox, thirdBehindBox, thirdAfterBox);
    console.log(random, secondRandom, thirdRandom);
    
    loadedFont.load().then(() => {

      // Find the leftmost coordinate of the name on the canvas 
      let boxX: number = textX - nameObj.width / 2;
      let secondBoxX: number;
      let thirdBoxX: number;

      // Edge case: No black boxes for single character names or whitespace-only names
      if (name.length > 1 && name.trim()) {
        // Loop through name to find where we should
        // start drawing the box behind the randomly chosen character
        for (let i = 0; i < random; i++) {
          textObj = nCtx.measureText(name[i]);
          boxX += textObj.width;
        };

        textObj = nCtx.measureText(name[random]);

        tileCtx.fillRect(
          boxX,
          438 - textObj.fontBoundingBoxAscent - 4,
          textObj.width,
          textObj.fontBoundingBoxAscent + textObj.fontBoundingBoxDescent + 7
        );

        if (name.length >= 8) {
          secondBoxX = boxX;

          for (let i = random; i < secondRandom; i++) {
            textObj = nCtx.measureText(name[i]);
            secondBoxX += textObj.width;
          };

          textObj = nCtx.measureText(name[secondRandom]);

          tileCtx.fillRect(
            secondBoxX,
            438 - textObj.fontBoundingBoxAscent - 3, // Slight change in size to make the look more dynamic
            textObj.width,
            textObj.fontBoundingBoxAscent + textObj.fontBoundingBoxDescent + 7
          );
        }

        if (name.length >= 16) {
          thirdBoxX = secondBoxX;

          for (let i = secondRandom; i < thirdRandom; i++) {
            textObj = nCtx.measureText(name[i]);
            thirdBoxX += textObj.width;
          };

          textObj = nCtx.measureText(name[thirdRandom]);

          tileCtx.fillRect(
            thirdBoxX,
            438 - textObj.fontBoundingBoxAscent - 3,
            textObj.width,
            textObj.fontBoundingBoxAscent + textObj.fontBoundingBoxDescent + 6 // Slight change in size to make the look more dynamic
          );
        }

      // Edge case: Draw entire name, if one character
      } else if (name.length === 1) { 
        nCtx.fillStyle = '#000000';
        nCtx.fillText(name, 418, 438);
        return;
      }
      
      nCtx.fillStyle = '#000000';
      nCtx.fillText(beforeBox, textX - nameObj.width / 2, textY);
      nCtx.fillStyle = '#FFFFFF'; // White text appears on black tile
      textObj = nCtx.measureText(beforeBox);
      nCtx.fillText(behindBox, boxX, textY);
      nCtx.fillStyle = '#000000';
      textObj = nCtx.measureText(name[random]); 
      nCtx.fillText(afterBox, boxX + textObj.width, textY);

      if (name.length >= 8) {
        nCtx.fillStyle = '#FFFFFF';
        nCtx.fillText(secondBehindBox, secondBoxX, textY);
        nCtx.fillStyle = '#000000';
        textObj = nCtx.measureText(name[secondRandom]); 
        nCtx.fillText(secondAfterBox, secondBoxX + textObj.width, textY);

        if (name.length >= 16) {
          nCtx.fillStyle = '#FFFFFF';
          nCtx.fillText(thirdBehindBox, thirdBoxX, textY);
          nCtx.fillStyle = '#000000';
          textObj = nCtx.measureText(name[thirdRandom]); 
          nCtx.fillText(thirdAfterBox, thirdBoxX + textObj.width, textY);
        }
      }

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

  useEffect(() => {
    // Force portrait canvas to clear if "No Portrait" is selected
    if (char === 'None') {
      pCtx = portraitCanvas.current.getContext('2d');
      pCtx.clearRect(0, 0, 1275, 500);
    }
    return;
  }, [char]);

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

  const drawCustomPortrait = (customImage: CanvasImageSource) => {
    // Initialize portrait canvas and clear current portrait
    pCtx = portraitCanvas.current.getContext('2d');
    pCtx.clearRect(0, 0, 1275, 800);

    const width = customImage.width as number;
    const height = customImage.height as number;

    pCtx.drawImage(customImage, 0, 0, width, height);
    return;
  }

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
        alt='Custom Portrait'
        ref={customChar}
        id='custom'
        className='hidden'
        src={custom}
        crossOrigin="anonymous"
        onLoad={() => drawCustomPortrait(customChar.current)}
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