import React from 'react';

import ImageCard from './ImageCard';

let images = [];
let imgAountInSubDir = [
  ["asia", 31],           // Asia
  ["west_europe", 16],    // West Europe
  ["central_europe", 23], // Central Europe
  ["south_europe", 22],   // South Europe
  ["north_europe", 18],   // North Europe
  ["north_america", 11],  // North America
];

const ImageList = (props) => {

  setImgName();

  const showImages = images[props.tagIndex].map((image, index) => {
    return <ImageCard key={index} img={image} />
  });

  return (
    <div className="image-list">
      {showImages}
    </div>
  );
}

function setImgName() {
  for (let n of imgAountInSubDir) {
    let temp = [];
    for (let i = 1; i <= n[1]; i++) {
      let imgName = `../img/${n[0]}/${n[0]}_${i}.jpg`;
      temp.push(imgName);
    }

    images.push(temp);
  }
}

export default ImageList;