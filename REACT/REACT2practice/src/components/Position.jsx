import { useState } from 'react'
import './Position.css'

export default function Position({onClick,value}){

    return(
        <>
            <button className="box" onClick={onClick}>
                {value}
            </button>
        </>
    )
}