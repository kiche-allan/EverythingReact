import React, {useEffect} from 'react'

const Syntax = () => {

    useEffect(() => {
        console.log("in useEffect");
        return () => {
            console.log("in useEffect Cleanup");
        }, [])
        return (
            <div></div>
        )
    
}

export default Syntax