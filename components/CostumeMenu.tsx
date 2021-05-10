import React from 'react';

const CostumeMenu = ({ char, emote, setCostume, costumeMenus }) => {

  const costumeMenuCreator = (emotion) => {
    switch(emotion) {
      case 'neutral':
        return (
          <>
            <option value='Blazer'>Blazer</option>
            <option value='Blue'>Blue</option>
            <option value='Coat'>Coat</option>
            <option value='Pea'>Pea Coat</option>
            <option value='Shirt'>Shirt</option>
            <option value='Uniform'>Uniform</option>
            <option value='Fox'>Fox</option>
            <option value='Swimsuit'>Swimsuit</option>
            <option value='Shirtless'>Shirtless</option>
            <option value='Yukata'>Yukata</option>
            <option value='Exercise'>Exercise</option>
          </>
        )
      case 'happy':
        return (
          <>
            <option value='Blazer'>Blazer</option>
            <option value='Blue'>Blue</option>
            <option value='Coat'>Coat</option>
            <option value='Pea'>Pea Coat</option>
            <option value='Shirt'>Shirt</option>
            <option value='Uniform'>Uniform</option>
            <option value='Fox'>Fox</option>
            <option value='Swimsuit'>Swimsuit</option>
            <option value='Shirtless'>Shirtless</option>
            <option value='Yukata'>Yukata</option>
            <option value='Exercise'>Exercise</option>
          </>
        )
      case 'angry':
        return (
          <>
            <option value='Blazer'>Blazer</option>
            <option value='Blue'>Blue</option>
            <option value='Coat'>Coat</option>
            <option value='Pea'>Pea Coat</option>
            <option value='Shirt'>Shirt</option>
            <option value='Uniform'>Uniform</option>
            <option value='Fox'>Fox</option>
            <option value='Swimsuit'>Swimsuit</option>
            <option value='Shirtless'>Shirtless</option>
            <option value='Yukata'>Yukata</option>
            <option value='Exercise'>Exercise</option>
          </>
        )
      case 'shocked':
        return (
          <>
            <option value='Blazer'>Blazer</option>
            <option value='Blue'>Blue</option>
            <option value='Coat'>Coat</option>
            <option value='Pea'>Pea Coat</option>
            <option value='Shirt'>Shirt</option>
            <option value='Uniform'>Uniform</option>
            <option value='Fox'>Fox</option>
            <option value='Swimsuit'>Swimsuit</option>
            <option value='Shirtless'>Shirtless</option>
            <option value='Yukata'>Yukata</option>
            <option value='Exercise'>Exercise</option>
          </>
        )
      case 'hurt':
        return (
          <>
            <option value='Blazer'>Blazer</option>
            <option value='Blue'>Blue</option>
            <option value='Coat'>Coat</option>
            <option value='Pea'>Pea Coat</option>
            <option value='Shirt'>Shirt</option>
            <option value='Uniform'>Uniform</option>
            <option value='Fox'>Fox</option>
            <option value='Swimsuit'>Swimsuit</option>
            <option value='Shirtless'>Shirtless</option>
            <option value='Yukata'>Yukata</option>
            <option value='Exercise'>Exercise</option>
          </>
        )
      case 'sad':
        return (
          <>
            <option value='Blazer'>Blazer</option>
            <option value='Blue'>Blue</option>
            <option value='Coat'>Coat</option>
            <option value='Pea'>Pea Coat</option>
            <option value='Shirt'>Shirt</option>
            <option value='Uniform'>Uniform</option>
            <option value='Fox'>Fox</option>
            <option value='Swimsuit'>Swimsuit</option>
            <option value='Shirtless'>Shirtless</option>
            <option value='Yukata'>Yukata</option>
            <option value='Exercise'>Exercise</option>
          </>
        )
      default:
        return (
          <>
            <option value='Blazer'>Blazer</option>
            <option value='Blue'>Blue</option>
            <option value='Coat'>Coat</option>
            <option value='Pea'>Pea Coat</option>
            <option value='Shirt'>Shirt</option>
            <option value='Uniform'>Uniform</option>
            <option value='Fox'>Fox</option>
            <option value='Swimsuit'>Swimsuit</option>
            <option value='Shirtless'>Shirtless</option>
            <option value='Yukata'>Yukata</option>
            <option value='Exercise'>Exercise</option>
          </>
        )
    }
  }

  let charCostumes = [];

  if (costumeMenus.length) {
    charCostumes = costumeMenus.map(costume => {
      return (
        <option 
          key={`${char}: ${costume}`} 
          value={costume}>{costume}
        </option>
      );
    });
  }

  console.log(costumeMenus);

  const switchCostume = (e: any) => {
    return setCostume(e.target.value);
  }

  return (
    <select id='costumeMenu' name='costumes' onChange={switchCostume} className='menus'>
      {charCostumes}
    </select>
  )
}

export default CostumeMenu;