import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import pathToFileName from './utilities';

import './style.css';

import Tags from './Tags'
import ImageList from './ImageList';
import Popup from './Popup';

const App = () => {

  const [tagIndex, setTagIndex] = useState(0);
  const [showPopup, setPopup] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const eachAlbumSize = {
    0: 31,
    1: 18,
    2: 23,
    3: 20,
    4: 18,
    5: 11
  }

  const getTagIndex = (index) => {
    setTagIndex(index);
  }

  const handlePopup = (isPopupSet, img) => {
    
    if (isPopupSet) {
      setPopup(true);
      setCurrentImg(img);
    } else {
      setPopup(false);
    }
  }

  const nextOrLastPic = (next, cur) => {

    let fileNameArr = pathToFileName(cur).split("_");
    let curImgIndex = fileNameArr[fileNameArr.length - 1];
    let index = null;
    if (next) {
      index = (curImgIndex % eachAlbumSize[tagIndex]) + 1;
    } else {
      
      index = (curImgIndex - 1 > 0) ? curImgIndex - 1 : eachAlbumSize[tagIndex];
    }
    let newPic = cur.split("_");
    newPic[newPic.length - 1] = index;
    setCurrentImg(newPic.join('_') + ".jpg");
  }

  const showPage = (isPopup) => {
    return ((!showPopup) ? 
      (<div className="content">
        <Tags getTagIndex={getTagIndex} />
        <ImageList tagIndex={tagIndex} handlePopup={handlePopup} />
      </div>) :
      (<div className="popup">
        <Popup 
          handlePopup={handlePopup} 
          currentImg={currentImg} 
          nextOrLastPic={nextOrLastPic}
          key={Math.floor(Math.random() * 1000000)}
        />
      </div>)
    );
  }

  return (
    showPage(showPopup)
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));