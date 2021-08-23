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

// export const removeBookId = (bookId) => {
//   const savedBookIds = localStorage.getItem('character')
//     ? JSON.parse(localStorage.getItem('character'))
//     : null;

//   if (!savedBookIds) {
//     return false;
//   }

//   const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
//   localStorage.setItem('character', JSON.stringify(updatedSavedBookIds));

//   return true;
// };
