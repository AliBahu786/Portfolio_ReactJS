import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'
import backgroundImage from './chatgpt-chatbot.png';

const Video = () => {
    const [openVideo, setOpenVideo] = useState(false)
    const openVideoModal = () => {
        setOpenVideo(true)
    }

    const videoAreaStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <div className="video__area" style={videoAreaStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div onClick={openVideoModal} className="video__area-play-icon video-pulse"><i className="fas fa-play"></i></div>
                    </div>
                </div>
            </div>
            <ModalVideo channel="youtube" autoplay isOpen={openVideo} videoId="F5Uym51SqDM" onClose={() => setOpenVideo(false)} />
        </div>
    );
};

export default Video;