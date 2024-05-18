import React from 'react'
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className='row sidebar '>
            <div className='row vh-100'>
                <Link className='d-flex align-items-center justify-content-center border border-start-0 bg-white' to="/dashboard">Add Course</Link>
                <Link className='d-flex align-items-center justify-content-center border border-start-0 bg-white' to="/contactDetails">Contact Details</Link>
                <Link className='d-flex align-items-center justify-content-center border border-start-0 bg-white' to="/orderSummary">Order Details</Link>
            </div>
        </div>
    )
}
