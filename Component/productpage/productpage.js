import React from "react";

// PictureGrid Component
const PictureGrid = ({ pictures }) => {
    return (
      <div className="body1">
        <div className="gridContainer">
          {pictures.map((picture, index) => (
            <div key={index} className="gridItem">
              <img src={picture.src} alt={picture.alt} className="imagecard"/>
              <div className="textContainer">
                <p className="text">{picture.text}</p>
                <p className="subText"><u>Sign in</u> or create an account to see pricing</p> {/* Additional text added */}
              </div>
              <div className="iconContainer">
                <img src="./heart.png" alt="Love Icon" className="loveIcon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


// HomePage Component
const HomePage = () => {
      const pictures = [
           { src: "./img1.png", alt: "Picture 1", text: "product name" },
           { src: "./img2.png", alt: "Picture 2", text: "product name" },
    { src: "./img3.png", alt: "Picture 3", text: "product name" },
         { src: "./img4.png", alt: "Picture 4", text: "product name" },
            { src: "./img5.png", alt: "Picture 5", text: "product name" },
         { src: "./img6.png", alt: "Picture 6", text: "product name" },
            { src: "./img7.png", alt: "Picture 7", text: "product name" },
            { src: "./img8.png", alt: "Picture 8", text: "product name" },
            { src: "./img9.png", alt: "Picture 9", text: "product name" },
            { src: "./img1.png", alt: "Picture 10", text: "product name" },
            { src: "./img10.png", alt: "Picture 11", text: "product name" },
            { src: "./img12.png", alt: "Picture 12", text: "product name" },
         { src: "./img55.png", alt: "Picture 13", text: "product name" },
            { src: "./img81.png", alt: "Picture 14", text: "product name" },
            { src: "./img565.png", alt: "Picture 15", text: "product name" },
            { src: "./img1.png", alt: "Picture 16", text: "Product name" },
            { src: "./img3.png", alt: "Picture 17", text: "Product name" },
            { src: "./img9.png", alt: "Picture 18", text: "Product name" },
          ];

  return (
    <div style={{ height: '10%' }}>
      <PictureGrid pictures={pictures} />
    </div>
  );
};

export default HomePage;
