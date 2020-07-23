import React from "react";

import { SearchBar, VideoDetail, VideoList } from "./components";

import youtube from "./api/youtube";

//class based components great for state management "smart components"
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('the first youtube video');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => { // stop execution of code before fetched
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 8,
                key:'AIzaSyAhjum8VLlrug3bU3TfsKFAs1SRMJ-DgOs',
                q: searchTerm,
             }
            });
            console.log(response.data.items);
            this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
    }


    render (){
        const { selectedVideo, videos } = this.state; //destructuring this.state.selcectedVideo used in Video detail
        return  (
            <main class="page">
                <div class="main-wrapper">
                        <div class="search-wrap">
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </div>
                    <div class="content">
                        <div class="video-detail-wrap">
                            <VideoDetail video={ selectedVideo } />
                        </div>
                        <div class="video-list-wrap">
                            <VideoList  videos={ videos } onVideoSelect={ this.onVideoSelect }/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

//functional based components are not good for state "dummy components"
// const App = () => {
//     return(<h1>Youtube clone App</h1>)
// }

export default App;