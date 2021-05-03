import React from 'react';
import Menus from './Menus';

const TextAndTools = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait, text, setText, setFont }) => {

  const toolProps: { 
    char: string, 
    setChar: any, 
    emote: string, 
    setEmote: any, 
    costume: string, 
    setCostume: any, 
    setPortrait: any 
  } = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait,
  }

  return (
    <>
      <textarea 
        id='textField' 
        autoFocus={true}
        rows={3}
        cols={50}
        defaultValue={text}
        onChange={(e) => setText(e.target.value)} 
      />  
      <div>
        <Menus {...toolProps} />
      </div>
      <div id='buttonDiv'>
        <div id='vanillaFont' className='fonts' onClick={() => setFont('32pt KoreanKRSM')}>KoreanKRSM &#40;Persona 5&#41;</div>
        <div id='royalFont' className='fonts' onClick={() => setFont('20pt Optima nova LT')}>Optima Nova Black &#40;Persona 5 Royal&#41;</div>
      </div>
    </>
  )
}

export default TextAndTools;