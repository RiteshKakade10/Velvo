import React, { useState } from 'react'
export default function Demo() {
  const [state,setState]=useState(0);
  const inc=()=>{
    setState(state+1)
  }
  return (
    <div>
      <h1>Counter Project</h1>
      <h2>{state}</h2>
        <button onClick={inc}>Inc</button>
    </div>
  )
}
