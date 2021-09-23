import React from 'react'
import { Button } from 'react-bootstrap'
const ButtonFancy = (props) => {
  return (
    <Button
      data-id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onClick={props.handleClick}
     >
      <h4>{props.label}</h4>
    </Button>
  )
}
export default ButtonFancy
