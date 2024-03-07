import React from 'react'
import Add from './Add'
import Search from './search'

const Validation = ({add,setadd,sumit_add,search,setsearch}) => {
  return (
    <main className='validation'>
      <Add add={add} setadd={setadd} sumit_add={sumit_add} />
      <Search search={search} setsearch={setsearch}/>
    </main>
  )
}

export default Validation