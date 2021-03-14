import React from 'react';

const CostumeMenu = ({ emote, setCostume }) => {

  const costumeMenuCreator = (emotion) => {
    switch(emotion) {
      case 'neutral':
        return (
          <>
            <option value='blazer'>Blazer</option>
            <option value='blue'>Blue</option>
            <option value='coat'>Coat</option>
            <option value='pea'>Pea Coat</option>
            <option value='shirt'>Shirt</option>
            <option value='uniform'>Uniform</option>
            <option value='fox'>Fox</option>
            <option value='swimsuit'>Swimsuit</option>
            <option value='shirtless'>Shirtless</option>
            <option value='yukata'>Yukata</option>
            <option value='exercise'>Exercise</option>
          </>
        )
      case 'happy':
        return (
          <>
            <option value='blazer'>Blazer</option>
            <option value='blue'>Blue</option>
            <option value='coat'>Coat</option>
            <option value='pea'>Pea Coat</option>
            <option value='shirt'>Shirt</option>
            <option value='uniform'>Uniform</option>
            <option value='fox'>Fox</option>
            <option value='swimsuit'>Swimsuit</option>
            <option value='shirtless'>Shirtless</option>
            <option value='yukata'>Yukata</option>
            <option value='exercise'>Exercise</option>
          </>
        )
      case 'angry':
        return (
          <>
            <option value='blazer'>Blazer</option>
            <option value='blue'>Blue</option>
            <option value='coat'>Coat</option>
            <option value='pea'>Pea Coat</option>
            <option value='shirt'>Shirt</option>
            <option value='uniform'>Uniform</option>
            <option value='fox'>Fox</option>
            <option value='swimsuit'>Swimsuit</option>
            <option value='shirtless'>Shirtless</option>
            <option value='yukata'>Yukata</option>
            <option value='exercise'>Exercise</option>
          </>
        )
      case 'shocked':
        return (
          <>
            <option value='blazer'>Blazer</option>
            <option value='blue'>Blue</option>
            <option value='coat'>Coat</option>
            <option value='pea'>Pea Coat</option>
            <option value='shirt'>Shirt</option>
            <option value='uniform'>Uniform</option>
            <option value='fox'>Fox</option>
            <option value='swimsuit'>Swimsuit</option>
            <option value='shirtless'>Shirtless</option>
            <option value='yukata'>Yukata</option>
            <option value='exercise'>Exercise</option>
          </>
        )
      case 'hurt':
        return (
          <>
            <option value='blazer'>Blazer</option>
            <option value='blue'>Blue</option>
            <option value='coat'>Coat</option>
            <option value='pea'>Pea Coat</option>
            <option value='shirt'>Shirt</option>
            <option value='uniform'>Uniform</option>
            <option value='fox'>Fox</option>
            <option value='swimsuit'>Swimsuit</option>
            <option value='shirtless'>Shirtless</option>
            <option value='yukata'>Yukata</option>
            <option value='exercise'>Exercise</option>
          </>
        )
      case 'sad':
        return (
          <>
            <option value='blazer'>Blazer</option>
            <option value='blue'>Blue</option>
            <option value='coat'>Coat</option>
            <option value='pea'>Pea Coat</option>
            <option value='shirt'>Shirt</option>
            <option value='uniform'>Uniform</option>
            <option value='fox'>Fox</option>
            <option value='swimsuit'>Swimsuit</option>
            <option value='shirtless'>Shirtless</option>
            <option value='yukata'>Yukata</option>
            <option value='exercise'>Exercise</option>
          </>
        )
      default:
        return (
          <>
            <option value='blazer'>Blazer</option>
            <option value='blue'>Blue</option>
            <option value='coat'>Coat</option>
            <option value='pea'>Pea Coat</option>
            <option value='shirt'>Shirt</option>
            <option value='uniform'>Uniform</option>
            <option value='fox'>Fox</option>
            <option value='swimsuit'>Swimsuit</option>
            <option value='shirtless'>Shirtless</option>
            <option value='yukata'>Yukata</option>
            <option value='exercise'>Exercise</option>
          </>
        )
    }
  }

  const switchCostume = (e: any) => {
    return setCostume(e.target.value);
  }

  return (
    <select id='costumeMenu' name='costumes' onChange={switchCostume} className='menus'>
      {costumeMenuCreator(emote)}
    </select>
  )
}

export default CostumeMenu;