import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import ImageCanvas from './components/ImageCanvas';
// import TextAndTools from './components/TextAndTools';
// import Header from './components/Header';

const Persona3 = () => {

    // Initial values of all three menus, which will in turn determine our portrait
    const [char, setChar] = useState<string>('');
    const [emote, setEmote]= useState<string>('');
    const [costume, setCostume] = useState<string>('');
  
    // Initial values of name text, dialogue text, font and game version, which will determine our dialogue box
    const [name, setName] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [font, setFont] = useState<string>('SkipStd-B');
    const [box, setBox] = useState<string>('')
    
    // Initial portrait and box that will be rendered 
    const [portrait, setPortrait] = 
      useState<string>(``);
    const [custom, setCustom] = useState<string>('');
    
    // By adding props to a separate object here, we can get around a TypeScript quirk
    // Read more here: https://stackoverflow.com/questions/48240449/type-is-not-assignable-to-type-intrinsicattributes-intrinsicclassattribu
    const appProps: any = {
      char,
      setChar,
      emote,
      setEmote,
      costume,
      setCostume,
      name,
      setName,
      text,
      setText,
      portrait,
      setPortrait,
      custom,
      setCustom,
      box,
      setBox,
      font,
      setFont,
    };

  return (
    <>
    </>
  )
};

export default Persona3;