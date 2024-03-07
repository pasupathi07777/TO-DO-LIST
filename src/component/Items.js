import React from 'react'
import Del_button from './Del_button'

const Items = ({ item }) => {
    return (
        // <form action="" key={key} className='user_items' onSubmit={(a => { a.preventDefault() })}>
        //     <input type="checkbox" checked={item.checked} name="" id="" />
        //     <p>{item.details}</p>
        //     <Del_button />

        // </form>
        <li className='llist'  key={item.id} >
            <input type="checkbox" checked={item.checked} name="" id="" />
            <p>{item.details}</p>
            <Del_button />


        </li>

    )
}

export default Items