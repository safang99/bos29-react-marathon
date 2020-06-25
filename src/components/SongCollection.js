import React, { useState } from 'react'

import Song from "./Song"

const SongCollection = (props) => {
  const [selectedSongId, setSelectedSongId] = useState(null)
  // debugger
  const songComponents = props.songs.map((song) => {

    const handleClick = () => {
      setSelectedSongId(song.id)
    }

    let selected = false
    if (selectedSongId === song.id) {
      selected = true
    }

    return(
      <Song
        key={song.id} 
        artist={song.artist}
        name={song.name}
        handleClick={handleClick}
        selected={selected}
      />
    )
  })

  return (
    <div className="cell small-6">
      <h3>Songs</h3>
      {songComponents}
    </div>
  )
}

export default SongCollection