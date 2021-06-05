import React, { useState } from 'react';
import ImageCanvas from './components/ImageCanvas';
import TextAndTools from './components/TextAndTools';
import Header from './components/Header';

const App = () => {
  // Initial values of all three menus, which will in turn determine our portrait
  // TODO: Randomize these initial values upon load!
  const [char, setChar] = useState<string>('Ann');
  const [emote, setEmote]= useState<string>('Happy');
  const [costume, setCostume] = useState<string>('Gym Clothes');
  const [text, setText] = useState<string>('');
  const [font, setFont] = useState<string>('KoreanKRSM');
  const [selection, setSelection] = useState<string>(char);
  
  const [portrait, setPortrait] = 
    useState<string>(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  const [box, setBox] = useState<string>(`../images/boxes/db-${selection}-${font}.png`);
  
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
    box: any,
    setBox: any,
    selection: any,
    setSelection: any,
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
    box,
    setBox,
    selection,
    setSelection,
  }

  return (
    <>
      <Header />
      <ImageCanvas {...appProps} />
      <TextAndTools {...appProps} />
    </>
  );
}

export default App;