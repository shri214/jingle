import React from "react";
import { Carousel } from "antd";
import "./style.css";

const contentStyle = {
  height: "100%",
  width: "100%",
  color: "#fff",
  background: "#364d79",
  objectFit: "contain",
};

export const ImageCarousel = ({ images }) => (
  <Carousel autoplay effect="fade">
    <div>
      <img src={images[0]} alt="image1" style={contentStyle} />
      <p className="para">Welcome to Jingle Holiday Bazar Pvt Ltd.</p>
      <button className="btns">contact</button>
    </div>
    <div>
      <img src={images[1]} alt="image1" style={contentStyle} />
      <p className="para">Welcome to Jingle Holiday Bazar Pvt Ltd.</p>
      <button className="btns">contact</button>
    </div>
    <div>
      <img src={images[2]} alt="image1" style={contentStyle} />
      <p className="para">Welcome to Jingle Holiday Bazar Pvt Ltd.</p>
      <button className="btns">contact</button>
    </div>
  </Carousel>
);
