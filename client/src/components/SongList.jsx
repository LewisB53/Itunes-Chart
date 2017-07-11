import React from 'react'
import Song from './Song.jsx'

class SongList extends React.Component {


  render() {
    console.log(this.props.songs)

    const options = this.props.songs.map((song, index) => {
    <Song position={index+1} key={song.id.attributes["im:id"]} title={song["im:name"].label} artist={song["im:artist"].label}>
    </Song>

        console.log(options)

    })

    return (
      <ul className='song'>
      <li> {} </li>
      </ul>
      )

  }
}

export default SongList