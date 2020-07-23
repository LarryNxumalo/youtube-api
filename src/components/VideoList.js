import React from 'react';
// import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    return (

        <React.Fragment>
            {listOfVideos}
        </React.Fragment>

    )
}

export default VideoList;
