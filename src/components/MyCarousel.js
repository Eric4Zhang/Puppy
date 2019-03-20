import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function MyCarousel(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(props.jsonFileUrl)
      .then(response => response.json())
      .then(data => {setImages(data);})
      .catch(e =>{
        console.error(e);});
  }, []);

  return (
    <Carousel id={props.id} indicators={false} controls={false} className="shadow mb-4 h-100">
      {images.map(image => (
        <Carousel.Item key={image.id}>
          <img className="d-block w-100" src={image.path} alt={image.caption} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
