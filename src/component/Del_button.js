import React from 'react'
import { FaTrash } from "react-icons/fa";


const Del_button = ({del}) => {
  return (
    <button type="submit" onClick={()=>del()}><FaTrash />
    </button>
  )
}

export default Del_button