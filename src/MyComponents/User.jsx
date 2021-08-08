import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {fname}=useParams();
    return (
        <>
        <h1>This is the fname value {fname} </h1>
        </>
    )
}

export default User
