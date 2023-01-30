import { useState } from "react";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";

import './styles.css';

const Images = [ pic1, pic2, ];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  function prevSlide() {
    setCurrent(current === 0 ? Images.length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === Images.length - 1 ? 0 : current + 1);
  }

  return (
    <div className="slider">
      <h1>Image Carousel</h1>
      <div className="left-arrow" onClick={prevSlide}>
        ⬅
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        ⮕
      </div>
      {Images.map(
        (image, index) =>
          current === index && (
            <div key={image} className="slide">
              <img src={image} alt="" />
            </div>
          )
      )}
    </div>
  );
}
