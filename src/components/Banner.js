import React from "react";
//  import other thing from react -- > boostrap
import Slider from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'; // boostrap css file
const Banner = ({ banner }) => {
  // every king of single data found in data folder in single json file format
  return (
    <Slider fade>
      {banner.end.map((item, index) => (
        <Slider.Item
          key={item.image}
          id="banner"
          interval={1000}
          keyboard={true}
        >
          <img
            className="d-block w-100"
            id="bannerImage"
            src={item.image}
            alt={`${index} banner`}
          />
          {/*  slider caption */}
          <Slider.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read more</u>
          </Slider.Caption>
        </Slider.Item>
      ))}
    </Slider>
  );
};

export default Banner;
