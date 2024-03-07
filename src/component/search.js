import React from 'react'

const search = ({search,setsearch}) => {
  return (
    
    <form action="" className='search_form' >
         <input className='search_input' type="text" placeholder='Search'  onKeyUp={(e)=>setsearch(e.target.value)} />

    </form>
  )
}

export default search