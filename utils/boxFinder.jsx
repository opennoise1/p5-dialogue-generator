import React from 'react';

const boxDirectory = {
  Akechi: true,
  Ann: true,
  Futaba: true,
  Haru: true,
  Joker: true,
  Kamoshida: true,
  Kaneshiro: true,
  Madarame: true,
  Mishima: true,
  Nakanohara: true,
  Okumura: true,
  Sae: true,
  Shido: true,
  Shiho: true,
  Sumire: true,
  Tanaka: true,
};

const boxFinder = (char) => {
  switch (char) {
    case 'Akechi': {
      return (
        <>
          <option value='Akechi'>Akechi</option>
          <option value='Cognitive Akechi'>Cognitive Akechi</option>
        </>
      );
    }
    case 'Ann': {
      return (
        <>
          <option value='Ann'>Ann</option>
          <option value='Princess Ann'>Princess Ann</option>
        </>
      );
    }
    case 'Futaba': {
      return (
        <>
          <option value='Futaba'>Futaba</option>
          <option value='Shadow Futaba'>Shadow Futaba</option>
        </>
      );
    }
    case 'Haru': {
      return (
        <>
          <option value='Haru'>Haru</option>
          <option value='Beauty Thief'>Beauty Thief</option>
        </>
      );
    }
    case 'Joker': {
      return (
        <>
          <option value='Joker'>Joker</option>
          <option value='Ren'>Ren</option>
          <option value='Akira'>Akira</option>
        </>
      );
    }
    case 'Kamoshida': {
      return (
        <>
          <option value='Kamoshida'>Kamoshida</option>
          <option value='Shadow Kamoshida'>Shadow Kamoshida</option>
        </>
      );
    }
    case 'Kaneshiro': {
      return (
        <>
          <option value='Kaneshiro'>Kaneshiro</option>
          <option value='Shadow Kaneshiro'>Shadow Kaneshiro</option>
        </>
      );
    }
    case 'Madarame': {
      return (
        <>
          <option value='Madarame'>Madarame</option>
          <option value='Shadow Madarame'>Shadow Madarame</option>
        </>
      );
    }
    case 'Mishima': {
      return (
        <>
          <option value='Mishima'>Mishima</option>
          <option value='Shadow Mishima'>Shadow Mishima</option>
        </>
      );
    }
    case 'Nakanohara': {
      return (
        <>
          <option value='Nakanohara'>Nakanohara</option>
          <option value='Shadow Nakanohara'>Shadow Nakanohara</option>
        </>
      );
    }
    case 'Okumura': {
      return (
        <>
          <option value='Okumura'>Okumura</option>
          <option value='Shadow Okumura'>Shadow Okumura</option>
        </>
      );
    }
    case 'Sae': {
      return (
        <>
          <option value='Sae'>Sae</option>
          <option value='Shadow Sae'>Shadow Sae</option>
        </>
      );
    }
    case 'Shido': {
      return (
        <>
          <option value='Shido'>Shido</option>
          <option value='Shadow Shido'>Shadow Shido</option>
        </>
      );
    }
    case 'Shiho': {
      return (
        <>
          <option value='Shiho'>Shiho</option>
          <option value='Cognitive Shiho'>Cognitive Shiho Suzui</option>
        </>
      );
    }
    case 'Sumire': {
      return (
        <>
          <option value='Sumire'>Sumire</option>
          <option value='Kasumi'>Kasumi</option>
        </>
      );
    }
    case 'Tanaka': {
      return (
        <>
          <option value='Tanaka'>Tanaka</option>
          <option value='Shady Commodities Tanaka'>Shady Commodities Tanaka</option>
        </>
      );
    }
  }
}

export { boxDirectory, boxFinder };