// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';

// ----------------------------------------------
// Zoom
// ----------------------------------------------
const miscZoom = () => {
  const imgArr = $('.post__content img');

  imgArr.each((idx, img) => {
    if (img.src.indexOf('full') === -1) {
      $(img).attr('data-action', 'zoom');
    }
  });
};

const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
  };
  return arr
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscZoom,
  shuffle
};
