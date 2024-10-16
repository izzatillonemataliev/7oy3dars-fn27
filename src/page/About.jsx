import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';  // CSS faylni import qilish

function About() {
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
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_02_m.jpg"
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
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_02_m.jpg"
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

export default About;
