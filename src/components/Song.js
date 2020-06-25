import React from "react"

const Song = props => {

  let classes = ""
  if (props.selected) {
    classes = "selected"
  }
  return(
    <p className={classes} onClick={props.handleClick}>{props.artist} - {props.name}</p>
  )
}

export default Song