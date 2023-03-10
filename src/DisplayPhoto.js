import { Component } from "react";

class DisplayPhoto extends Component {
  render() {
    const { images, active } = this.props;
    console.log("images  ", images);
    return (
      <div>
        {images.map((photo, index) => (
          <img
            src={photo}
            alt="animal-thumbnail"
            className={index === active ? "active" : ""}
            onClick={() => this.handleIndexClick(index)}
          />
        ))}
      </div>
    );
  }
}

export default DisplayPhoto;
