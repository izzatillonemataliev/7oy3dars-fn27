import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';  // CSS faylni import qilish

function Home() {
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
          src="https://play-lh.googleusercontent.com/_t_3la6FA-lRhKIYJJcxe-AOSUJPL5l88t3oncSiYM-QfPOUXEkrZaeJiB88VueISg=w240-h480-rw"
          className="small-image"
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
            src="https://play-lh.googleusercontent.com/_t_3la6FA-lRhKIYJJcxe-AOSUJPL5l88t3oncSiYM-QfPOUXEkrZaeJiB88VueISg=w240-h480-rw"
            className="main-image"
            afterLoad={() => toast.success("Rasm yuklandi!")}
          />
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Home;
