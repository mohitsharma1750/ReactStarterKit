
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyAsyU0qwradZTIE0ovxE7HIgU6C2dSXLz4';




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    }
this.onSearchChange('Default Videos');

  }

onSearchChange(term){
  console.log("Inside On Search"+ term);
  YTSearch({
    key: API_KEY, term: {term}
  }, (videos) => {
    this.setState({ videos :  videos
    ,
    selectedVideo: videos[0] 
  });
  })
}


  render() {
    return (
      <div>
        <SearchBar onSearch = {term => this.onSearchChange(term)}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>);
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
