import React,{useContext} from 'react'
import {FullName,LastName} from '../Context'

export const ComC = () => {
    const fname = useContext(FullName);
    const lname = useContext(LastName);
    return (
        <h1>The name is {fname} {lname}</h1>
    );
}
