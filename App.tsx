import React, { useState } from 'react';
import ImageCanvas from './components/ImageCanvas'
import TextAndTools from './components/TextAndTools';

const App = () => {
  // Initial values of all three menus, which will in turn determine our portrait
  // TODO: Randomize these initial values upon load!
  const [char, setChar] = useState<string>('Ann');
  const [emote, setEmote]= useState<string>('Netural');
  const [costume, setCostume] = useState<string>('Winter Uniform');
  const [text, setText] = useState<string>('');
  const [font, setFont] = useState<string>('18pt KoreanKRSM');

  const [portrait, setPortrait] = 
    useState<string>(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  
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
    portrait: any,
    setPortrait: any,
    font: any,
    setFont: any,
  } = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    text,
    setText,
    portrait,
    setPortrait,
    font,
    setFont,
  }

  return (
    <div id='imageTools'>
      <ImageCanvas {...appProps} />
      <TextAndTools {...appProps} />
    </div>
  );
}

export default App;