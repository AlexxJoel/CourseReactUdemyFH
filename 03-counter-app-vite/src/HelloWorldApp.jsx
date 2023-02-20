import React from 'react'
import PropTypes from 'prop-types'

//yarn add prop-types

export const HelloWorldApp = () => {
    return (
        <div>HelloWorld App</div>
    );
}

const newMessage = { name: "Alexxjoel" };

export const FisrtApp = ({title , subtitle = 1+1}) => {

    return (
        <>
            <code> {JSON.stringify(newMessage)} </code>
            <p>{title}</p>
            <p>{subtitle + 1}</p>
        </>
    )
}

FisrtApp.propTypes = { //warning on console
    title: PropTypes.string.isRequired
}




