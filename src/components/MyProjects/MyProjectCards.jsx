import React from 'react'
import { Link } from "react-router-dom"

export default function MyProjectCards({ project }) {
    return (
        <div>
            <div className="card">
                <h1>{project.header}</h1>
            <div className="cardphoto">
                <img src={project.img} alt="" />
            </div>
            <div className="cardtext">
                <p>{project.description}</p>
            </div>
            <Link to={{ pathname: project.link }} target='_blank'>
                <button>Project</button>
            </Link>
            </div>
        </div>
    )
}
