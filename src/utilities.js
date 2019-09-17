const pathToFileName = (imgPath) => {
  let imgName = imgPath.split("/");
  imgName = imgName[imgName.length - 1];
  imgName = imgName.split(".");

  return imgName[0];
}

export default pathToFileName;