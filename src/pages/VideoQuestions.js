import React from 'react';

import { Link } from 'react-router-dom';
import VideoList from '../components/VideoList';

import './styles/VideoQuestions.css';

import state from '../data.json';

class VideoQuestions extends React.Component {

    render() {
        return (
            <div>
                <div className="video_container">
                    <div className="video_buttons">
                        <Link to="questions/create-question" className="">
                            Crear pregunta
                        </Link>
                    </div>
                    <div className="video_list">
                        <div className="video_container">
                            <VideoList videos={state.data} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default VideoQuestions;