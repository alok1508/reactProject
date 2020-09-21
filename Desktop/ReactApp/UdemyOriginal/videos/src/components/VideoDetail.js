import React from 'react';

const VideoDetail =({video })=> {
    if(!video){
        return (
        <div>Loading...</div>
        
        )
    }
    const VideoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
        <div className="ui embed">
        <iframe 
        title="Video Player" src={VideoSrc}/>
        </div>
        <div className="ui segment">
           <h4>{video.snippet.title}</h4>
           <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};


export default VideoDetail;
