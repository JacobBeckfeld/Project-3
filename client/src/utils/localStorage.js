export const getSavedCharacter = () => {
  const charInfo = localStorage.getItem('character')
    ? JSON.parse(localStorage.getItem('character'))
    : [];

  return charInfo;
};

export const saveCharacterInfo = (charInfo) => {
  if (charInfo) {
    localStorage.setItem('character', JSON.stringify(charInfo));
  } else {
    localStorage.removeItem('character');
  }
};