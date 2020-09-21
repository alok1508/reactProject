import React from 'react';
import VideoItem from './VideoItem';

 const VideoList = ({ videos,onVideoSelect }) =>{
     console.log(videos);
    const renderList = videos.map((video)=>{
            return <VideoItem 
            key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
     });
    return (
        <div className='ui list'>
            {renderList}
        </div>
    );
};

export default VideoList;