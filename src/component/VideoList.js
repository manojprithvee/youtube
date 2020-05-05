import React, { Component } from 'react';
import VideoCard from "./VideoCard"
class VideoList extends Component {
    render() {
        const videos = this.props.videos.map((video) => {
            return <VideoCard
                onVideoclick={this.props.onVideoclick}
                key={video.id.videoId}
                video={video}
            />
        })
        return (
            <div className="ui massive divided list">
                {videos}
            </div>
        );
    }
}

export default VideoList;