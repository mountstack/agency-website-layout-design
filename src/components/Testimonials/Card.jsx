import React from 'react'

function Card({img, description, name, role}) {
    return (
        <div className=' bg-gray-200 p-5 w-[25%]'>
            xvfbgvhj
            <div>
                <img src={img} alt="" srcset="" />
            </div> 

            <p>
                {description}
            </p> 

            <h1>
                {name}
            </h1> 

            <p>
                {role}
            </p>
        </div>
    )
}

export default Card