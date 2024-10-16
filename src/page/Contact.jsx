import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';  // CSS faylni import qilish

function Contact() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadImage = () => {
    toast.info("Rasm yuklanmoqda...");
    setImageLoaded(true);
  };

  return (
    <div className="home-container">
      <h1 className="title">Home Page</h1>
      
      <div className="image-button-container">
        <LazyLoadImage
          alt="Small preview"
          effect="blur"
          src="https://lionmotors.uz/wp-content/uploads/2020/11/malibuwhite2.jpg"
          className="small-image"
          width={240}
          height={240}
        />

        <button onClick={loadImage} className="load-button">
          Asosiy Rasmni Yuklash
        </button>
      </div>

      {imageLoaded && (
        <div className="main-image-container">
          <LazyLoadImage
            alt="Nature"
            effect="blur"
            src="https://lionmotors.uz/wp-content/uploads/2020/11/malibuwhite2.jpg"
            className="main-image"
            afterLoad={() => toast.success("Rasm yuklandi!")}
            width={240}
            height={240}
          />
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Contact;
