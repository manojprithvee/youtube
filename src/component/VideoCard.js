import '../css/VideoCard.css'
import React, { Component } from 'react';

class VideoCard extends Component {

    render() {
        return (
            <div onClick={() => this.props.onVideoclick(this.props.video)} className="video-card item">
                <img className="ui image" alt={unescape(this.props.video.snippet.title)} src={this.props.video.snippet.thumbnails.medium.url}></img>
                <div className="content">
                    <h4>{unescape(this.props.video.snippet.title)}</h4>
                    {/* <div class Name="description">{unescape(this.props.video.snippet.description)}</div> */}
                </div>
            </div>
        );
    }
}

export default VideoCard;