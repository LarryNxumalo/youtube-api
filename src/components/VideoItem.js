import React from 'react';

// import { Typography } from "@material-ui/core"

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <React.Fragment>
            <div class="item"  onClick={() => onVideoSelect(video)} >
                <img class="thumb" src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
                <p>{ video.snippet.title }</p>
            </div>
        </React.Fragment>
    )
}

export default VideoItem;
