import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'
import Validation from './component/Validation'

import { useState } from 'react';




 

  //  ----------------------

 

  function App() {
    let App_details={
      app_name:"To DoList",
      // app_footer:App_details.app_footer
  
    }

   let [items,setitems]=useState(  JSON.parse(localStorage.getItem('todolist')) || [])
   let [add,setadd]=useState("")
   let [search,setsearch]=useState('')
   console.log(search)


  












  function sumit_add(a){
    a.preventDefault()
    if(!add) return
    add_value(add)
    setadd("")
  }

  let add_value=(value)=>{
    console.log(value)
    let id=(!items.length)?1:(items.length+1)

   
    let values={id,checked:false,details:value}
    let latect_values=[...items,values]
    
    console.log(latect_values)
    setitems(latect_values)
    localStorage.setItem('todolist', JSON.stringify(latect_values));


  }


  let che_in=(val,key)=>{
    console.log(val,key)
    let rusult=items.map((item)=>(
      (item.id===key)?{...item,checked:!item.checked}:item

      
    ))
    console.log(rusult)
    
    setitems(rusult)
    localStorage.setItem('todolist', JSON.stringify(rusult));
    

  }
  // npm run build
  let del=(val)=>{
    // console.log(val,key)
    let rusult=items.filter((item)=>(
      (item.id!==val)

      
    ))
    console.log(rusult)
    setitems(rusult)
    localStorage.setItem('todolist', JSON.stringify(rusult));
    

  }

  return (
    <div className="App">
      <Header app_name={App_details.app_name}  />
      <Validation add={add} setadd={setadd} sumit_add={sumit_add} search={search} setsearch={setsearch}/>
      <Content items={items.filter((ite)=>ite.details.includes(search))} che_in={che_in} del={del}/>
     
      <Footer app_footer={`${items.length} Items`}/>

      
    </div>
  );
}

export default App;

//  let users=[
  // {
  //   id:1,
  //   checked:true,
  //   details:"play cricket",

  // },
  // {
  //   id:2,
  //   checked:true,
  //   details:"play foodball",
    
  // },
  // {
  //   id:3,
  //   checked:false,
  //   details:"play cooding",
    
  // }
// ]

