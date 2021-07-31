import React, { useState } from 'react'
import './stylesheets/Form.css'
export default function Form() {
    let [Name, setName] = useState({
        firstname: '',
        lastname: ''
    });
    console.log(Name.firstname);
    console.log(Name.lastname);
    const changed = (event) => {
        setName((val) => {
            if (event.target.name === "first") {
                return {
                    firstname: event.target.value,
                    lastname: Name.lastname
                }
            }
            else {
                return {
                    firstname: Name.firstname,
                    lastname: event.target.value
                }
            }
        });
    }
    const Submitted = (event) => {
        event.preventDefault()
        // setFirst(Name);
    }
    return (
        <>
            <h1>Hello {Name.firstname} {Name.lastname}</h1>
            <form onSubmit={Submitted}>
                <input type="text" placeholder="Enter your name" onChange={changed} name="first" />
                <input type="text" placeholder="Enter your name" onChange={changed} name="second" />
                <button>Submit</button>
            </form>
        </>
    )
}
