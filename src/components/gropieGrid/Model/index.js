import React from 'react'
import { Model, Question, Answer } from './GroupieModelElements'

function GroupieModel({toggle, show}) {

    return (
        <Model show={show} onClick={toggle}>
            <h1>Hidden Information</h1>
            <h1>Hidden Information</h1>
            <h1>Hidden Information</h1>
        </Model>
    )
}

export default GroupieModel
