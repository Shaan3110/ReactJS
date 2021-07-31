import React from 'react'
import Data from './Data'
import Cards from './Cards'
function AllCards() {
    return (
            Data.map(val => {
                return (<Cards
                    key={val.id}
                    url={val.url}
                    nam={val.nam}
                    content={val.content}
                    link={val.link}
                />)
            })
    );
}
export default AllCards