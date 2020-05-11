import React from 'react';

const Project = ({ project }) => {
    return (
        <div key={project.id} className='project'>
            <h2 className='project-name'>
                <span className='heading'>{project.name}</span>
                <br />
                <span className='subheading'>an exploration of distance functions</span>
            </h2>
            {project.images.map(({id, src, title, description}) => 
            <>
            <div key={id} className='project-item'>
                <img key={id} src={src} alt='blobs' />
            </div>
            </>
            )}
            
        </div>
    )
}

export default Project