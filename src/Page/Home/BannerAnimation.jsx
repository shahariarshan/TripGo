import { useRef } from "react";
import anime from '../../assets/components/pp.mp4'
const VideoBanner = () => {
  const videoRef = useRef(null);

  const handleMouseOver = () => {
    videoRef.current.play();
  };

  const handleMouseOut = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    
      <div className="">
        <video
          ref={videoRef}
          className=" transform transition-transform duration-300 rotate-y-10 hover:rotate-y-0"
          src={anime}
          type="video/mp4"
          loop
          muted
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </div>
    
  );
};

export default VideoBanner;
