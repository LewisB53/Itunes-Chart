import React from 'react'

class Song extends React.Component{

render(){
  return (
    <div>
    <ul>
    <li className='song'>
      <p>{this.props.position}:</p>
      <p>Title: {this.props.title}</p>
      <p>Artist: {this.props.artist}</p>
    </li>
    </ul>
    </div>
    )
}

}


export default Song