import React,{ createContext } from 'react'
import {ComA} from './Com/ComA'

const FullName=createContext();
const LastName=createContext();
const Context = () => {
    return (
        <>
            <FullName.Provider value={"Suchintan"}>
                <LastName.Provider value={"Das"}>
                     <ComA/>
                </LastName.Provider>
            </FullName.Provider>
            
        </>
    )
}
export {FullName,LastName};
export default Context;
