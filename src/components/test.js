import React from 'react'

function Test({message}) {
  return (
    <div className='flex justify-center items-center h-screen '>
        <div>
            <h1 className='text-4xl text-red-500'>{message}</h1>
            <p >This is a test component</p>
        </div>


        
    </div>
  )
}

export default Test