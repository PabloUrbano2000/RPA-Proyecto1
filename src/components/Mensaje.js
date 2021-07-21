import React from 'react'

export default function Mensaje({ mensaje }) {
    return (
        <div className="alert alert-danger">
            <label>{mensaje}</label>
        </div>
    )
}