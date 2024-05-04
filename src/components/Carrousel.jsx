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
        <img src={media.media_url} className="post-img" alt="" />
        <div className="right-carousel" onClick={() => rightSwipe()}></div>
        <div className="bottom-carousel flex"></div>
      </div>
    </div>
  );
};

export default Carrousel;
