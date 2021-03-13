import React, { useState } from 'react';
import ImageCanvas from './components/ImageCanvas'
import TextAndTools from './components/TextAndTools';

const App = () => {
  // Initial values of all three menus, which will in turn determine our portrait
  // TODO: Randomize these initial values upon load!
  const [char, setChar]: [string, any] = useState('ann');
  const [emote, setEmote]: [string, any] = useState('netural');
  const [costume, setCostume]: [string, any] = useState('uniform');
  const [text, setText]: [string, any] = useState('Take your heart');
  const [font, setFont]: [string, any] = useState(/* new FontFace(); */)

  const [portrait, setPortrait]: [string, any] = 
    useState(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  
  // by adding props to a separate object here, we can get around a TypeScript error
  // read more here: https://stackoverflow.com/questions/48240449/type-is-not-assignable-to-type-intrinsicattributes-intrinsicclassattribu
  // might wanna just fix this in the TSConfig file later
  const appProps: {
    char: string,
    setChar: any,
    emote: string,
    setEmote: any,
    costume: string,
    setCostume: any,
    text: string,
    setText: any,
    setPortrait: any,
  } = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    text,
    setText,
    setPortrait,
  }

  return (
    <div id='imageTools'>
      <ImageCanvas {...appProps} portrait={portrait} />
      <TextAndTools {...appProps} />
    </div>
  );
}

export default App;