import React from 'react';

const Tags = (props) => {
  let tags = [
    "Asia",
    "West Europe",
    "Central Europe",
    "South Europe",
    "North Europe",
    "North America"
  ];

  const handleOnClick = (e) => {
    props.getTagIndex(e.target.id);
  }

  return (
    <div>
      {tags.map((item, index) => <span className="tag" key={index}  id={index} onClick={handleOnClick}>#{item}</span>)}
    </div>
  );
}

export default Tags;