import React from 'react'


const Add = ({add,setadd,sumit_add}) => {
  return (
    <form className='add_form' action="" onSubmit={(e)=>sumit_add(e) }>
        <input className='add_input' type="text" placeholder='Add items' value={add} onChange={(e)=>setadd(e.target.value)}  />
        <button className='add_btn'>Add</button>
        
    </form>
  )
}

export default Add