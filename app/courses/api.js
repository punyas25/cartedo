const baseURI = 'https://cartedo-mock-api-d9672364e747.herokuapp.com/api/courses/'

// Get all courses
// // /api/courses
export const getAllCourses = async () => {
    const response = await fetch(baseURI)
    if (!response.ok) {
        throw new Error("Failed to fetch Courses")
    }
    return response.json()
}


// Get course with :id
// /api/courses/:id
export const getCourse = async (id) => {
    const response = await fetch(`${baseURI}${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch Selected course")
    }
    return response.json()
}

// POST: Add new course
// /api/courses : check this before submission
export const addCourse = async (data) => {
    const course = await fetch(baseURI,
        'POST',
        {
            id: data.id,
            title: data.title,
            description: data.description,
            image: data.image
        }
    )
    return course.json();
}


