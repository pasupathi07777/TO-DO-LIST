import React from 'react'


const Del_button = ({del}) => {
  return (
    <button type="submit" onClick={()=>del()}>Delete</button>
  )
}

export default Del_button