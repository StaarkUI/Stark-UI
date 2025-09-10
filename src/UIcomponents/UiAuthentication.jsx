import React from 'react'
import LoginCard from "../design/LoginCard";
import SignIn from "../design/SignIn";

const UiAuthentication = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Authentication</h1>
      <div className="mt-4">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          sign In
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-130 rounded-2xl">
          <SignIn />
        </div>
      </div>

      <div className="mt-4">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Log In
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-130 rounded-2xl">
          <LoginCard />
        </div>
      </div>

      <div className="ml-80 mt-25 mb-20">
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </div>
      
      </div>
  )
}

export default UiAuthentication