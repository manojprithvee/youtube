import React, { Component } from 'react';

class Video extends Component {
    render() {
        if (!this.props.video) {
            return (
                <div></div>
            );
        }
        return (
            <div>
                <div className="ui embed">
                    <iframe title={this.props.video.id.videoId} src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} allowFullScreen />
                </div>
                <div className="ui segment">
                    <div className="content">
                        <h4>{unescape(this.props.video.snippet.title)}</h4>
                        <p className="description">
                            {unescape(this.props.video.snippet.description)}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;