import React, { useEffect, useRef } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import findPosition from '../utils/portraitPositions';
import findWidth from '../utils/portraitWidths';

const ImageCanvas = ({ portrait, custom, setCustom, name, text, char, boxBack, boxFront, version, font, emote, costume }) => {
  const portraitCanvas: React.MutableRefObject<any> = useRef(null);
  const boxBackCanvas: React.MutableRefObject<any> = useRef(null);
  const boxFrontCanvas: React.MutableRefObject<any> = useRef(null);
  const textCanvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const customChar: React.MutableRefObject<any> = useRef(null);
  const dialogueBoxBack: React.MutableRefObject<any> = useRef(null);
  const dialogueBoxFront: React.MutableRefObject<any> = useRef(null);
  let pCtx: CanvasRenderingContext2D;
  let bCtx: CanvasRenderingContext2D;
  let tCtx: CanvasRenderingContext2D;
  const loadedFont = new FontFaceObserver(`${font}`);
  
  const boxPositions = {
    goldenBack: [61, 546, 1200, 256],
    goldenFront: [42.5, 621, 1200, 171],
    vanillaBack: [63, 524, 1225, 274],
    vanillaFront: [75, 600, 1200, 175],
  };

  useEffect(() => {
    // Initialize text canvas and clear current text
    tCtx = textCanvas.current.getContext('2d');
    tCtx.clearRect(0, 0, 1275, 800);
   
    tCtx.font = `26pt ${font}`;

    // Check font is loaded before drawing name
    // This ensures name is styled when website is first loaded
    loadedFont.load().then(() => {
      // Draw or redraw name, using the correct color and positioning based on game version and font selected
      if (version === 'golden') {
        tCtx.fillStyle = '#4B2A14';
        font === 'SkipStd-B' ? tCtx.fillText(name, 80, 615) : tCtx.fillText(name, 80, 612); 
      } else {
        tCtx.fillStyle = '#000000';
        font === 'SkipStd-B' ? tCtx.fillText(name, 85, 590) : tCtx.fillText(name, 85, 587);
      }
    });

    // Draw or redraw text
    tCtx.fillStyle = '#FFFFFF';
    const rows = text.split('\n');
    if (rows[1] === undefined) rows[1] = '';
    if (rows[2] === undefined) rows[2] = '';

    if (version === 'golden') {
      tCtx.fillText(rows[0], 93, 670);
      tCtx.fillText(rows[1], 93, 715);
      tCtx.fillText(rows[2], 93, 760);
    } else {
      tCtx.fillText(rows[0], 100, 645);
      tCtx.fillText(rows[1], 100, 690);
      tCtx.fillText(rows[2], 100, 735);
    }
    return;
  }, [text, name, version, char, font]);

  useEffect(() => {
    // Redraw the portrait when choosing a new box since the portrait's position will change
    if (char !== 'None') {
      if (custom) {
        drawCustomPortrait(customChar.current);
      } else {
        drawPortrait(character.current, findWidth(char, emote, costume));
      }
    }
    return;
  }, [version]);

  useEffect(() => {
    // Force portrait canvas to clear if "No Portrait" is selected
    if (char === 'None') {
      pCtx = portraitCanvas.current.getContext('2d');
      pCtx.clearRect(0, 0, 1275, 800);
    }
    return;
  }, [char]);

  const drawPortrait = (charImage: CanvasImageSource, width: number) => {
    // Clear existing custom portrait URL, if it exists
    if (custom) setCustom('');
    // Initialize portrait canvas and clear current portrait
    pCtx = portraitCanvas.current.getContext('2d');
    pCtx.clearRect(0, 0, 1275, 800);
    
    // Because all portraits are not the same size,
    // ensure they are resized proportionally by calculating new dimensions
    const imageHeight: number = charImage.height as number;
    const imageWidth: number = charImage.width as number;
    const targetArea: number = imageHeight * width;
    const newWidth: number = Math.sqrt(((imageWidth / imageHeight) * targetArea));
    const newHeight: number = targetArea / newWidth;
    
    // Look up draw position for requested portrait and draw new portrait
    let x: number;
    let y: number;
    const position = findPosition(version, char, emote, costume);
    x = position[0]; y = position[1];
    pCtx.drawImage(charImage, x, y, newWidth, newHeight);
    return;
  };

  const drawCustomPortrait = (customImage: CanvasImageSource) => {
    // Initialize portrait canvas and clear current portrait
    pCtx = portraitCanvas.current.getContext('2d');
    pCtx.clearRect(0, 0, 1275, 800);

    const width = customImage.width as number;
    const height = customImage.height as number;
    let x: number;
    let y: number;
    // [795, 135] : [870, 115]
    x = version === 'golden' ? 795 : 870;
    y = version === 'golden' ? 175 : 154;

    pCtx.drawImage(customImage, x, y, width, height);
    return;
  }

  const drawBoxBack = (boxImage: CanvasImageSource) => {
    // Initialize box canvas, clear current box and draw new box
    bCtx = boxBackCanvas.current.getContext('2d');
    bCtx.clearRect(0, 0, 1275, 800);
    
    if (version === 'golden') {
      bCtx.drawImage(boxImage, boxPositions.goldenBack[0], boxPositions.goldenBack[1], boxPositions.goldenBack[2], boxPositions.goldenBack[3]);
    } else {
      bCtx.drawImage(boxImage, boxPositions.vanillaBack[0], boxPositions.vanillaBack[1], boxPositions.vanillaBack[2], boxPositions.vanillaBack[3]);
    }
    
    return;
  };

  const drawBoxFront = (boxImage: CanvasImageSource) => {
    // Initialize box canvas, clear current box and draw new box
    bCtx = boxFrontCanvas.current.getContext('2d');
    bCtx.clearRect(0, 0, 1275, 800);

    if (version === 'golden') {
      bCtx.drawImage(boxImage, boxPositions.goldenFront[0], boxPositions.goldenFront[1], boxPositions.goldenFront[2], boxPositions.goldenFront[3]);
    } else {
      bCtx.drawImage(boxImage, boxPositions.vanillaFront[0], boxPositions.vanillaFront[1], boxPositions.vanillaFront[2], boxPositions.vanillaFront[3]);
    }
    return;
  };

  return (
    <main id='canvasDiv'>
      <canvas
        ref={boxBackCanvas}
        id='boxBackCanvas'
        width='1275'
        height='800'
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={portraitCanvas} 
        id='portraitCanvas'
        width='1275' 
        height='800' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={boxFrontCanvas} 
        id='boxFrontCanvas'
        width='1275' 
        height='800' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={textCanvas} 
        id='textCanvas'
        width='1275' 
        height='800' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      {/* NOTE: We're rendering portrait and box img tags so they can be referenced for the canvas.
      They will be hidden via the stylesheet */}
      <img
        alt='Dialogue box back'
        ref={dialogueBoxBack}
        id='boxBack'
        className='hidden'
        src={boxBack}
        crossOrigin="anonymous"
        onLoad={() => drawBoxBack(dialogueBoxBack.current)}
      />
      <img
        alt='Potrait'
        ref={character}
        id='portrait'
        className='hidden'
        src={portrait}
        crossOrigin="anonymous"
        onLoad={() => drawPortrait(character.current, findWidth(char, emote, costume))}
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
        alt='Dialogue box front'
        ref={dialogueBoxFront}
        id='boxFront'
        className='hidden'
        src={boxFront}
        crossOrigin="anonymous"
        onLoad={() => drawBoxFront(dialogueBoxFront.current)}
      />
    </main>
  );
};

export default ImageCanvas;