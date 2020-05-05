import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import Video from './Video'
import axios from 'axios'
import youtube from '../api/youtube'

class App extends Component {
    state = { videos: [], selectedVideo: null }

    onVideoclick = (video) => {
        this.setState({ selectedVideo: video })
    }

    onSearchSubmit = async (term) => {
        youtube.q = term
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: youtube
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })

    }

    componentDidMount() {
        this.onSearchSubmit("buildings")
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} text="Video Search:" />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <Video video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoclick={this.onVideoclick} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;