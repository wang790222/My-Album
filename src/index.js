import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import './style.css';

import Tags from './Tags'
import ImageList from './ImageList';
import Popup from './Popup';

const App = () => {

  const [tagIndex, setTagIndex] = useState(0);
  const [showPopup, setPopup] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

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

  const showPage = (isPopup) => {
    return ((!showPopup) ? 
      (<div className="content">
        <Tags getTagIndex={getTagIndex} />
        <ImageList tagIndex={tagIndex} handlePopup={handlePopup} />
      </div>) :
      (<div className="popup">
        <Popup handlePopup={handlePopup} currentImg={currentImg} />
      </div>)
    );
  }

  return (
    showPage(showPopup)
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));