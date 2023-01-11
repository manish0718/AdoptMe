import { Component } from "react";
import DisplayPhoto from "./DisplayPhoto";

class Carousel extends Component {
  state = {
    active: 1,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (id) => {
    this.setState({
      active: id,
    });
  };

  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="anmal" />
        <div className="carousel-smaller">
          {/* {images.map((photo, index) => (
            <img
              src={photo}
              alt="animal-thumbnail"
              className={index === active ? "active" : ""}
              onClick={() => this.handleIndexClick(index)}
            />
          ))} */}
          <DisplayPhoto images={images} active={active} />
        </div>
      </div>
    );
  }
}

export default Carousel;
