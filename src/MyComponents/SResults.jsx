import React from 'react'

const SResults = (props) => {
    const imgsrc=`https://source.unsplash.com/user/erondu/600x400?${props.img}`
    return (
        <div className="Image">
           <img src={imgsrc} alt="" /> 
        </div>
    )
}

export default SResults
