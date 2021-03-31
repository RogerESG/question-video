import React from 'react';

import { Link } from 'react-router-dom';

import './styles/VideoList.css'



class VideoList extends React.Component {
    render() {
        return (
            <ul className="videosList">
                {this.props.videos.map((dato) => {
                    return (
                        <li key={dato.id} className="grid-container videosListItem">
                            <div className="top">
                                <video src={dato.videoUrl} className="" />
                            </div>
                            <div className="bot">
                                <div><strong>{dato.question}</strong></div>
                                <div className="question">
                                    <Link to={`questions/video-${dato.id}`} quest={dato.question}>
                                        Responder
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default VideoList;