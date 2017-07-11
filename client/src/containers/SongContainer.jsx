import React from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    songs: [],
  };
}

componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = () => {
    if (request.status != 200) return

    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);

    this.setState({ songs: data.feed.entry })
    console.log(" data ", data.feed.entry)
  }

  request.send()
}


  render(){
    return (
      <div>
        <h2>song Container</h2>
        <SongList songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongContainer;