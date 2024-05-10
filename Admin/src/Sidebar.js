import React from 'react'
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className='row sidebar '>
            <div className='row '>
                <Link className=' ' to="/dashboard">Add Course</Link>
                <Link className='' to="/contactDetails">Contact Details</Link>
                <Link className=''>Order Details</Link>
            </div>
        </div>
    )
}
