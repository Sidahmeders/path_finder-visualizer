import React, { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider(props) {

    const randomFunction = () => console.log('random context function')

    const [nodes, setNodes] = useState([]);

    const [startAndFinishPoints, setStartAndFinishPoints] = useState({
        startPoint: {
            row: 0,
            column: 0
        },
        finishPoint: {
            row: 0,
            column: 49
        }
    });

    return (
        <Context.Provider value={{
            randomFunction,
            nodes,
            setNodes,
            setStartAndFinishPoints,
            startAndFinishPoints
        }}>
            {props.children}
        </Context.Provider>
    );
}

const ContextConsumer = Context;

export { ContextProvider, ContextConsumer }
