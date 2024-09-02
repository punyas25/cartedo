'use client'
import { useEffect, useReducer, useState } from "react"

import Link from "next/link"

import { getAllCourses } from "./api"

export default function Courses() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllCourses()
      .then(response => {
        setCourses(response)
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
      <div className="grid grid-cols-5 gap-6">
        {
          courses.map((course) => {
            return (
              <div className="course flex flex-col bg-white rounded-lg">
                <div
                  style={{ backgroundImage: `url(${course.image})` }}
                  className="rounded-t-lg max-h-6xl bg-cover relative flex flex-col justify-center mb-4 min-w-14 min-h-52 "
                >
                  <Link href={`/courses/${course.id}`} className="w-full h-full"></Link>
                </div>
                <div className="flex justify-between p-4">
                  <p>{course.title}</p>
                  <button>
                    ...
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </main >
  );
}
