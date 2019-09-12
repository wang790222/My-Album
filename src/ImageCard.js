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
    
    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 5);
    this.setState({ spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img 
          alt={this.props.img}
          src={this.props.img}
          ref={this.imgRef}
        />
      </div>
    );
  }
}

export default ImageCard;