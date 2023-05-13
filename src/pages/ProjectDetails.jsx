import React from 'react'
import { Link } from 'react-router-dom'

const ProjectDetails = () => {
    return (
        <div className="py-[20%] flex flex-col px-[20%]">
            <Link to='/' className='underline text-blue-600'>Go to back</Link>
            <div>
                <h2>404</h2>
                <p>Page not found!</p>
                <p>There is some technical issue.</p>

            </div>
        </div>
    )
}

export default ProjectDetails