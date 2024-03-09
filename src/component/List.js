import React from 'react'

import Delete from './Delete'




function List({ items, che_in, del }) {
  return (
    <ul className='ulist'>
      {items.map((item) => (


        <li className='llist' key={item.id} >
          <input type="checkbox" checked={item.checked} name="" id="" onChange={() => che_in(item.checked, item.id)} />
          <p className={item.checked===true?"para":null}>{item.details}</p>
        {/* <Del_button del={item} /> */}
          <button type="submit" onClick={() => del(item.id)}><Delete/></button>


        </li>


      ))}

    </ul>
  )
}

export default List