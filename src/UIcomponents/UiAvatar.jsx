import React from 'react'
import Avater from "../design/Avatar"

const UiAvatar = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Avatar</h1>
      <div className='mt-8'>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <Avater />
        </div>
      </div>
       <div className="ml-80 mt-25">
        <h1 className="font-mono">Built by STARK UI at Vercel. The source code is available on GitHub.</h1>
      </div>
      </div>
  )
}

export default UiAvatar