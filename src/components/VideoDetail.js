import React from "react"

const VideoDetail = ({ video }) => {
    if(!video) return <div class="loader">Loading Vids...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
            <div class="video-typography">
                <h1>{ video.snippet.channelTitle }</h1>
                <p>{video.snippet.publishedAt}</p>
                <div class="line-divider"></div>
                <h3>{ video.snippet.description }</h3>

            </div>
        </React.Fragment>
    )
}

export default VideoDetail;