import React from 'react'

const Playlist = (props) => {
  let theChosenOne = ""

  if (props.highlighted) {
    theChosenOne = "selected"
  }


  return (
    <div onClick={props.handleSelected} className={theChosenOne}>
      <p>{props.playlist.name}</p>
    </div>
  )
}

export default Playlist

