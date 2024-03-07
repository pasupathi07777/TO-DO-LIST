import React from 'react'

import List from './List'


const Content = ({items,che_in,del}) => {
  return (
    <main className='content'>
      
      <List  items={items} che_in={che_in} del={del}/>
         

    </main>
  )
} 

export default Content