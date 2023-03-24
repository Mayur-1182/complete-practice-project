import React, { useEffect, useRef, useState } from 'react'
import './Practice2.css'
export default function Practice2() {

  const [name,setname]=useState(' ')
  const count=useRef(1)

  useEffect(()=>{
    count.current=count.current+1
  })
  console.log(count.current);

  return (
   <div>
    <input type="text" onChange={(event)=>setname(event.target.value)}/>
    <div>My name is {name}</div>
    <div>i rendered {count.current} times</div>
      
    </div>
  )
}
