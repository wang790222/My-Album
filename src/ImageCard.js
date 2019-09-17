import React from 'react';

class ImageCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    if (this.imgRef.current) {
      const height = this.imgRef.current.clientHeight;
      const spans = Math.ceil(height / 5);
      this.setState({ spans });
    }
  };

  handleOnClick = () => {
    let setPopup = true;
    this.props.handlePopup(setPopup, this.props.img);
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img 
          alt={this.props.img}
          src={this.props.img}
          ref={this.imgRef}
          onClick={this.handleOnClick}
          key={Math.floor(Math.random() * 1000000)}
        />
      </div>
    );
  }
}

export default ImageCard;