import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
   
    
  return (
    <div className='text-center m-4 bg-orange-200 text-black p-4 text-3xl'>Github followers: {data.followers}
     <div className="flex justify-center">
        <img src={data.avatar_url} alt="Git picture" width={200} className='rounded-full' />
     </div>    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sanket-08')
    return response.json()
}