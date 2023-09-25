import React from 'react';
import './Youtube.css';
const Youtube = () => {
  return (
    <div className='y'>
    <div className="rectangle">
    <div className="heading">VIDEO TUTORIALS</div>
    </div><br/><br/><br/><br/>
    <div className="video-grid">
      <div className="video-item">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/F37Gbxb1hNE"
          title="Video 1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-item">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/2W6A6juz-NI"
          title="Video 2"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-item">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/d1UZsam0_XI"
          title="Video 3"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-item">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/B6CFPFdVz5E"
          title="Video 4"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Youtube;
