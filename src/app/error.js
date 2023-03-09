"use client"
import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1 className="mb-2">Something Went Wrong!</h1>
      <button 
        className="hover:text-amber-600 border py-2 px-5 rounded-lg hover:border-amber-600"
        onClick={() => reset()}
      > 
        Try Again! 
      </button>
    </div>
  )
}


export default Error;