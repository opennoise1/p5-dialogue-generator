import { useState } from 'react';
import ImageCanvas from './components/ImageCanvas';
import TextAndTools from './components/TextAndTools';
import Header from './components/Header';

const App = () => {
  // Initial values of all three menus, which will in turn determine our portrait
  const [char, setChar] = useState<string>('Ann');
  const [emote, setEmote]= useState<string>('Happy');
  const [costume, setCostume] = useState<string>('Gym Clothes');

  // Initial values of dialogue text, font and current box selection which will determine our dialogue box
  const [text, setText] = useState<string>('');
  const [font, setFont] = useState<string>('KoreanKRSM');
  // Box font state can be removed once SlumpDB dialogue boxes are added
  const [boxFont, setBoxFont] = useState<string>('KoreanKRSM');
  const [selection, setSelection] = useState<string>(char);
  
  // Initial portrait and box that will be rendered 
  const [portrait, setPortrait] = 
    useState<string>(`https://p5generator.s3.amazonaws.com/images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  const [box, setBox] = useState<string>(`https://p5generator.s3.amazonaws.com/images/boxes/db-${selection}-${font}.png`);
  
  // By adding props to a separate object here, we can get around a TypeScript quirk
  // Read more here: https://stackoverflow.com/questions/48240449/type-is-not-assignable-to-type-intrinsicattributes-intrinsicclassattribu
  const appProps: any = {
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
    boxFont,
    setBoxFont,
    box,
    setBox,
    selection,
    setSelection,
  };

  return (
    <>
      <Header />
      <ImageCanvas {...appProps} />
      <TextAndTools {...appProps} />
    </>
  );
};
export default App;