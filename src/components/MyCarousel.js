import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function MyCarousel() {
  return (
    <Carousel indicators={false} controls={false} className="p-2 bg-light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\pictures\Eric.webp"
          alt="First slide alt"
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <img src=".\pictures\Sarah.webp" alt="Second slide alt" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\pictures\Vincent.jpg"
          alt="Second slide alt"
        />
      </Carousel.Item>
    </Carousel>
  );
}
