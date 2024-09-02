'use client'
import { useEffect, useReducer, useState } from "react"

import { getCourse } from "../api"

export default function Course({ params }) {
  const { slug } = params

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [course, setCourse] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCourse(slug)
      .then(response => {
        setCourse(response)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <p>Loading .....</p>
    )
  }

  return (
    <main className="w-screen	h-screen p-24">
      <div className="flex p-12 h-full gap-8 ">
        <div
          style={{ backgroundImage: `url(${course.image})` }}
          className="bg-cover rounded-md flex flex-col justify-center mb-4 w-1/2 h-full prose items-center	"
        >
          <h2 className="text-white">{course.title}</h2>
        </div>
        <div className="flex flex-col w-1/2 gap-8">
          <div className="bg-white p-10 rounded-md prose h-full">
            <h3 className="uppercase">{course.title}</h3>
            <p>{course.description}</p>
          </div>
          <button className="bg-sky-500 rounded-md w-full p-8 text-left	prose">
            <h2 className="text-white">Enroll</h2>
          </button>
        </div>
      </div>
    </main>
  );
}
