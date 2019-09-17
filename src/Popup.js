import React, { useEffect, useRef, useState } from 'react';
import pathToFileName from './utilities';

const Popup = (props) => {

  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const popupContentRef = useRef(null);

  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    if (imgRef.current.clientHeight > imgRef.current.clientWidth) {
      let width = imgRef.current.clientWidth;
      let fWidth = frameRef.current.clientWidth;
      
      setOffsetLeft((fWidth - width) / 2);
      setOffsetTop(0);
    } else {
      let height = imgRef.current.clientHeight;
      let fHeight = frameRef.current.clientHeight;
      setOffsetTop((fHeight - height) / 2);
      setOffsetLeft(0);
    }
  }, [offsetTop, offsetLeft]);

  const onClickImgFunction = (e) => {
    
    let ol = popupContentRef.current.offsetLeft;
    let rightBorder = imgRef.current.clientWidth + ol;
    let relativePosition = (e.nativeEvent.clientX - ol) / (rightBorder - ol);
    if (relativePosition < .2) {
      props.nextOrLastPic(false, props.currentImg);
    } else {
      props.nextOrLastPic(true, props.currentImg);
    }
  };

  const handleLast = () => {
    props.nextOrLastPic(false, props.currentImg);
  }
  
  const handleNext = () => {
    props.nextOrLastPic(true, props.currentImg);
  }

  const escFunction = () => {
    handleOnClick();
  };

  const handleOnClick = () => {
    let setPopup = false;
    props.handlePopup(setPopup);
  };

  const imgStyle = {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "auto",
    height: "auto", 
    position: "relative",
    top: offsetTop,
    left: offsetLeft,
    cursor: "pointer",
  };

  return (
    <div className="popup">
      <div className="popup__background">
        &nbsp;
      </div>
      <div className="popup__close" onClick={handleOnClick}>
        &times;
      </div>
      <div className="vertical-align">
        <div className="popup__content" ref={popupContentRef}>
          <div 
            className="popup__left" 
            ref={frameRef}
            onClick={onClickImgFunction}
          >
            <img 
              src={props.currentImg} 
              alt={props.currentImg}
              ref={imgRef}
              style={imgStyle}
            />
            <div className="popup__left-arrow-left">
              <ion-icon 
                name="arrow-dropleft" 
                className="arrow"
                onClick={handleLast}
              ></ion-icon>
            </div>
            <div className="popup__left-arrow-right">
              <ion-icon 
                name="arrow-dropright" 
                className="arrow"
                onClick={handleNext}
              ></ion-icon>
            </div>
          </div>
          <div className="popup__right">
            <div className="popup__right-text">
              <span>{getImgDescription(props.currentImg)}</span>
              <span><a href={getLocation(props.currentImg)} target="_blank"><ion-icon name="pin"  className="pin"></ion-icon></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const getImgDescription = (imgPath) => {

  let imgObj = {
    asia_1: "Sapporo, Japan",
    asia_2: "Sapporo, Japan",
    asia_3: "Sapporo, Japan",
    asia_4: "Okinawa, Japan",
    asia_5: "Hualien, Taiwan",
    asia_6: "Otaru, Japan",
    asia_7: "Shonan, Japan",
    asia_8: "Suzhou, China",
    asia_9: "Suzhou, China",
    asia_10: "Hualien, Taiwan",
    asia_11: "Hualien, Taiwan",
    asia_12: "Hong Kong, China",
    asia_13: "Hualien, Taiwan",
    asia_14: "Hong Kong, China",
    asia_15: "Hong Kong, China",
    asia_16: "Hualien, Taiwan",
    asia_17: "Okayama, Japan",
    asia_18: "Istanbul, Turkey",
    asia_19: "Istanbul, Turkey",
    asia_20: "Istanbul, Turkey",
    asia_21: "Tokyo, Japan",
    asia_22: "Istanbul, Turkey",
    asia_23: "Istanbul, Turkey",
    asia_24: "Tokyo, Japan",
    asia_25: "Istanbul, Turkey",
    asia_26: "Tokyo, Japan",
    asia_27: "Istanbul, Turkey",
    asia_28: "Yilan, Taiwan",
    asia_29: "Yilan, Taiwan",
    asia_30: "Himeji, Japan",
    asia_31: "Okayama, Japan",

    central_europe_1: "Vienna, Austria",
    central_europe_2: "Warsaw, Poland",
    central_europe_3: "Berlin, Germany",
    central_europe_4: "Munich, Germany",
    central_europe_5: "Vienna, Austria",
    central_europe_6: "Munich, Germany",
    central_europe_7: "Munich, Germany",
    central_europe_8: "Hohenzollern, Germany",
    central_europe_9: "Tubingen, Germany",
    central_europe_10: "Vienna, Austria",
    central_europe_11: "lake titisee, Garmany",
    central_europe_12: "Tubingen, Germany",
    central_europe_13: "hallstatt, Austria",
    central_europe_14: "Tubingen, Germany",
    central_europe_15: "Nuremberg, germany",
    central_europe_16: "Nuremberg, germany",
    central_europe_17: "Heidelberg, germany",
    central_europe_18: "Munich, Germany",
    central_europe_19: "Reutlingen, Germany",
    central_europe_20: "Reutlingen, Germany",
    central_europe_21: "Reutlingen, Germany",
    central_europe_22: "Zurich, Switzerland",
    central_europe_23: "Cologne, Germany",

    north_america_1: "tobermory, Canada",
    north_america_2: "toronto, Canada",
    north_america_3: "toronto, Canada",
    north_america_4: "Niagara Falls, Canada",
    north_america_5: "Niagara Falls, Canada",
    north_america_6: "tobermory, Canada",
    north_america_7: "Niagara Falls, Canada",
    north_america_8: "Niagara Falls, Canada",
    north_america_9: "toronto, Canada",
    north_america_10: "Niagara Falls, Canada",
    north_america_11: "Niagara Falls, Canada",

    north_europe_1: "tallinn, Estonia",
    north_europe_2: "tallinn, Estonia",
    north_europe_3: "Riga, Latvia",
    north_europe_4: "Stockholm, Sweden",
    north_europe_5: "Stockholm, Sweden",
    north_europe_6: "Oslo, Norway",
    north_europe_7: "Geiranger, Norway",
    north_europe_8: "Geiranger, Norway",
    north_europe_9: "Stavanger, Norway",
    north_europe_10: "Preikestolen, Norway",
    north_europe_11: "Preikestolen, Norway",
    north_europe_12: "Preikestolen, Norway",
    north_europe_13: "Kjeragbolten, Norway",
    north_europe_14: "Kjeragbolten, Norway",
    north_europe_15: "Kjeragbolten, Norway",
    north_europe_16: "Copenhagen, Denmark",
    north_europe_17: "Copenhagen, Denmark",
    north_europe_18: "Kjeragbolten, Norway",

    south_europe_1: "Pompeii, Italy",
    south_europe_2: "Barcelona, Spain",
    south_europe_3: "Rome, Italy",
    south_europe_4: "porto, Portugal",
    south_europe_5: "porto, Portugal",
    south_europe_6: "Rome, Italy",
    south_europe_7: "porto, Portugal",
    south_europe_8: "porto, Portugal",
    south_europe_9: "Lisbon, Portugal",
    south_europe_10: "Lisbon, Portugal",
    south_europe_11: "Lisbon, Portugal",
    south_europe_12: "Lisbon, Portugal",
    south_europe_13: "Pisa, Italy",
    south_europe_14: "Lisbon, Portugal",
    south_europe_15: "Bologna, Italy",
    south_europe_16: "Venice, Italy",
    south_europe_17: "Plitvice, Croatia",
    south_europe_18: "Milan, Italy",
    south_europe_19: "Zadar, Croatia",
    south_europe_20: "Zadar, Croatia",

    west_europe_1: "Zaanse Schans, Netherlands",
    west_europe_2: "Arcachon, France",
    west_europe_3: "London, United Kingdom",
    west_europe_4: "London, United Kingdom",
    west_europe_5: "Paris, france",
    west_europe_6: "Monaco, Monaco",
    west_europe_7: "Monaco, Monaco",
    west_europe_8: "Cambridge, United Kingdom",
    west_europe_9: "London, United Kingdom",
    west_europe_10: "London, United Kingdom",
    west_europe_11: "Brussel, Belgium",
    west_europe_12: "Paris, france",
    west_europe_13: "Paris, france",
    west_europe_14: "Paris, france",
    west_europe_15: "Amsterdam, Netherlands",
    west_europe_16: "Paris, france",
    west_europe_17: "Paris, france",
    west_europe_18: "Arcachon, France",
  };

  return (imgObj[pathToFileName(imgPath)]);
}

const getLocation = (imgPath) => {
  let locationObj = {
    asia_1: "https://ppt.cc/fbLVix",
    asia_2: "https://ppt.cc/fbLVix",
    asia_3: "https://ppt.cc/fbLVix",
    asia_4: "https://ppt.cc/fIoaPx",
    asia_5: "https://ppt.cc/fDyBKx",
    asia_6: "https://ppt.cc/fM57tx",
    asia_7: "https://reurl.cc/Qp3oA9",
    asia_8: "https://reurl.cc/9zX9NV",
    asia_9: "https://reurl.cc/9zX9NV",
    asia_10: "https://ppt.cc/fDyBKx",
    asia_11: "https://ppt.cc/fDyBKx",
    asia_12: "https://reurl.cc/yygaNO",
    asia_13: "https://ppt.cc/fDyBKx",
    asia_14: "https://reurl.cc/yygaNO",
    asia_15: "https://reurl.cc/yygaNO",
    asia_16: "https://ppt.cc/fDyBKx",
    asia_17: "https://reurl.cc/0zOe0b",
    asia_18: "https://reurl.cc/oDd32j",
    asia_19: "https://reurl.cc/oDd32j",
    asia_20: "https://reurl.cc/oDd32j",
    asia_21: "https://reurl.cc/ObqoNX",
    asia_22: "https://reurl.cc/oDd32j",
    asia_23: "https://reurl.cc/oDd32j",
    asia_24: "https://reurl.cc/ObqoNX",
    asia_25: "https://reurl.cc/oDd32j",
    asia_26: "https://reurl.cc/ObqoNX",
    asia_27: "https://reurl.cc/oDd32j",
    asia_28: "https://reurl.cc/8lnVaX",
    asia_29: "https://reurl.cc/8lnVaX",
    asia_30: "https://reurl.cc/72oq8b",
    asia_31: "https://reurl.cc/0zOe0b",

    central_europe_1: "https://reurl.cc/jd541M",
    central_europe_2: "https://reurl.cc/XXkrje",
    central_europe_3: "https://reurl.cc/e58b3W",
    central_europe_4: "https://reurl.cc/qD8b5n",
    central_europe_5: "https://reurl.cc/jd541M",
    central_europe_6: "https://reurl.cc/qD8b5n",
    central_europe_7: "https://reurl.cc/qD8b5n",
    central_europe_8: "https://reurl.cc/W4LYry",
    central_europe_9: "https://reurl.cc/EKzNrm",
    central_europe_10: "https://reurl.cc/jd541M",
    central_europe_11: "https://reurl.cc/Qp3lLO",
    central_europe_12: "https://reurl.cc/EKzNrm",
    central_europe_13: "https://reurl.cc/qD8b5q",
    central_europe_14: "https://reurl.cc/EKzNrm",
    central_europe_15: "https://reurl.cc/nV0b1d",
    central_europe_16: "https://reurl.cc/nV0b1d",
    central_europe_17: "https://reurl.cc/zyzGZa",
    central_europe_18: "https://reurl.cc/qD8b5n",
    central_europe_19: "https://reurl.cc/md9bo1",
    central_europe_20: "https://reurl.cc/md9bo1",
    central_europe_21: "https://reurl.cc/md9bo1",
    central_europe_22: "https://reurl.cc/alvbn3",
    central_europe_23: "https://reurl.cc/k50b1x",

    north_america_1: "https://reurl.cc/4gmDpL",
    north_america_2: "https://reurl.cc/EKzNRm",
    north_america_3: "https://reurl.cc/EKzNRm",
    north_america_4: "https://reurl.cc/Qp3lbO",
    north_america_5: "https://reurl.cc/Qp3lbO",
    north_america_6: "https://reurl.cc/4gmDpL",
    north_america_7: "https://reurl.cc/Qp3lbO",
    north_america_8: "https://reurl.cc/Qp3lbO",
    north_america_9: "https://reurl.cc/EKzNRm",
    north_america_10: "https://reurl.cc/Qp3lbO",
    north_america_11: "https://reurl.cc/Qp3lbO",

    north_europe_1: "https://reurl.cc/5gqL8q",
    north_europe_2: "https://reurl.cc/5gqL8q",
    north_europe_3: "https://reurl.cc/nV0b76",
    north_europe_4: "https://reurl.cc/md9bl9",
    north_europe_5: "https://reurl.cc/md9bl9",
    north_europe_6: "https://reurl.cc/k50blL",
    north_europe_7: "https://reurl.cc/pDybLZ",
    north_europe_8: "https://reurl.cc/pDybLZ",
    north_europe_9: "https://reurl.cc/Zn7dXW",
    north_europe_10: "https://reurl.cc/5gqLMv",
    north_europe_11: "https://reurl.cc/5gqLMv",
    north_europe_12: "https://reurl.cc/5gqLMv",
    north_europe_13: "https://reurl.cc/24gAW6",
    north_europe_14: "https://reurl.cc/24gAW6",
    north_europe_15: "https://reurl.cc/24gAW6",
    north_europe_16: "https://reurl.cc/0zObEK",
    north_europe_17: "https://reurl.cc/0zObEK",
    north_europe_18: "https://reurl.cc/24gAW6",

    south_europe_1: "https://reurl.cc/b6Rb9o",
    south_europe_2: "https://reurl.cc/EKzNo0",
    south_europe_3: "https://reurl.cc/Qp3lXM",
    south_europe_4: "https://reurl.cc/Na680k",
    south_europe_5: "https://reurl.cc/Na680k",
    south_europe_6: "https://reurl.cc/Qp3lXM",
    south_europe_7: "https://reurl.cc/Na680k",
    south_europe_8: "https://reurl.cc/Na680k",
    south_europe_9: "https://reurl.cc/qD8bLy",
    south_europe_10: "https://reurl.cc/qD8bLy",
    south_europe_11: "https://reurl.cc/qD8bLy",
    south_europe_12: "https://reurl.cc/qD8bLy",
    south_europe_13: "https://reurl.cc/e58bdx",
    south_europe_14: "https://reurl.cc/qD8bLy",
    south_europe_15: "https://reurl.cc/Qp3lZ9",
    south_europe_16: "https://reurl.cc/nV0bLD",
    south_europe_17: "https://reurl.cc/alvb4Z",
    south_europe_18: "https://reurl.cc/lLdb7Y",
    south_europe_19: "https://reurl.cc/yygb6O",
    south_europe_20: "https://reurl.cc/yygb6O",

    west_europe_1: "https://reurl.cc/W4LYxx",
    west_europe_2: "https://reurl.cc/ObqajX",
    west_europe_3: "https://reurl.cc/Rd17q9",
    west_europe_4: "https://reurl.cc/Rd17q9",
    west_europe_5: "https://reurl.cc/nV0bNX",
    west_europe_6: "https://reurl.cc/md9bMA",
    west_europe_7: "https://reurl.cc/md9bMA",
    west_europe_8: "https://reurl.cc/lLdbQj",
    west_europe_9: "https://reurl.cc/Rd17q9",
    west_europe_10: "https://reurl.cc/Rd17q9",
    west_europe_11: "https://reurl.cc/yygbL8",
    west_europe_12: "https://reurl.cc/nV0bNX",
    west_europe_13: "https://reurl.cc/nV0bNX",
    west_europe_14: "https://reurl.cc/nV0bNX",
    west_europe_15: "https://reurl.cc/rl8b9y",
    west_europe_16: "https://reurl.cc/nV0bNX",
    west_europe_17: "https://reurl.cc/nV0bNX",
    west_europe_18: "https://reurl.cc/ObqajX",
  }

  return (locationObj[pathToFileName(imgPath)]);
}

export default Popup;