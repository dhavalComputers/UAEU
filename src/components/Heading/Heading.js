import React from 'react';
import './Heading.css'
const Heading = (props) => {
    const {title, cls, color} = props
    return (
        <>
            <div className={`col-md-12 ${cls} `} >
                <h1 className={`heading title ${color} `}>{title}</h1>
            </div>
        </>
    )
}

export default Heading