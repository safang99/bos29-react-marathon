import React, { useState } from 'react'
import Playlist from './Playlist'

const PlaylistCollection  = (props) => {
  const [selected, setSelected] = useState(null)

  // debugger
  const playlistComponents = props.playlists.map((playlist) => {

    const handleSelected = () => {
        setSelected(playlist.id)
        console.log("handleselected fired")
    }
    // debugger
    let highlighted = false

    if (selected === playlist.id) {
        highlighted = true
    }

    return(
      <Playlist
        key={playlist.id}
        playlist={playlist}
        handleSelected={handleSelected}
        highlighted={highlighted}
      />
    )
  })


 return (
    <div className="cell small-6">
      <h3>Playlists</h3>
      {playlistComponents}
    </div>
  )
}

export default PlaylistCollection
