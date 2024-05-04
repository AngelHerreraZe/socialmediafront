import React, { useEffect, useState } from "react";

const Carrousel = ({ media }) => {
  const [visible, setVisible] = useState(0);

  const leftSwipe = () => {
    if (visible === 0) {
      setVisible(media.length - 1);
    } else {
      setVisible(visible - 1);
    }
  };

  const rightSwipe = () => {
    if (visible === media.length - 1) {
      setVisible(0);
    } else {
      setVisible(visible + 1);
    }
  };

  return (
    <div className="carousel">
      <div>
        <div className="left-carousel" onClick={() => leftSwipe()}></div>
        <div className="img-container flex">
          <img
            src={media[visible].media_url}
            className="post-img fade"
            alt=""
          />
        </div>
        <div className="right-carousel" onClick={() => rightSwipe()}></div>
        <div className={media.length === 1 ? "hide" : "bottom-carousel flex"}>
          {media.map((cuantity, index) => (
            <div
              key={index}
              onClick={() => setVisible(index)}
              className={index === visible ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
