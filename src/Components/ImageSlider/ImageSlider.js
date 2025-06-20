import { useEffect, useState } from "react";

const ImageSlider = () => {
  const [active, setActive] = useState(0);
  useEffect(()=>{
    const intervalId = setInterval(()=>{
        loadNextImage();
    },2000);
    return () => {
        clearInterval(intervalId)
    }
  })
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];

  const loadPrevImage = () => {
    setActive(active-1<0 ? images.length-1 : active-1);
  }

  const loadNextImage = () => {
    setActive((active+1)%(images.length))
  }

  return (
    <div>
      <div className="m-2 p-2 flex items-center justify-center">
        <img
          onClick={loadPrevImage}
          className="w-20 h-20 cursor-pointer"
          alt="left arrow"
          src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
        />
        <img alt="image-carousel" className="max-w-[600px] max-h-[600px]" src={images[active]} />
        <img
          onClick={loadNextImage}
          className="w-20 h-20 cursor-pointer"
          alt="right arrow"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
