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
          <Carousel.Caption>
            <a href="\omac-app\bible"><h1 style={{fontFamily:"impact"}} className="text-uppercase text-success">Welcome</h1></a>
            <a href="#" className="mr-5"><span className="border-success border-bottom text-success">I'm new</span></a>
            <a href="\omac-app\contact" ><span className="border-success border-bottom text-success">Direction</span></a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
