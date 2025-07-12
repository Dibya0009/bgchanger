import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState("White")

  return (
    <>
    <div className='fixed top-0 left-0 flex justify-center items-end h-screen w-full' style={{backgroundColor:color}}>
      <div className='rounded-xl py-1 px-3 fixed flex justify-center items-center mb-12 bg-amber-100 w-2xl h-14'>
        <button
        onClick={()=>setColor("red")}
        className='bg-red-400 w-16 px-1.5 py-1 rounded-xl text-black shadow-lg'
        >Red</button>
        <button
        className='bg-blue-400 w-16  px-1.5 py-1 rounded-xl text-black shadow-lg'
        onClick={()=>{setColor('blue')}}
        >Blue</button>
        <button
        className='bg-green-400 w-16 px-1.5 py-1 rounded-xl text-black shadow-lg'
        onClick={()=>setColor('green')}
        >Green</button>
        <button 
        className='bg-yellow-400 w-16 px-1.5 py-1 rounded-xl text-black shadow-lg'
        onClick = {()=>setColor('yellow')}
        >Yellow</button>
      </div>
    </div>
      
    </>
  )
}

export default App
