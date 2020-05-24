import React, { useContext } from 'react';
import Grid from './grid';
import { ContextConsumer } from '../context';
import { dijkstra } from '../algorithims/sidahmed';

const btnStyle = {
    width: "30%",
    height: "6vh",
    border: "none",
    display:"inline-block",
    fontSize: "22px",
    color:"#ff0",
    backgroundColor:"#000"
};

function PathFinder() {

    const context = useContext(ContextConsumer);
    const { nodes, setNodes, startAndFinishPoints } = context;
    const { startPoint, finishPoint } = startAndFinishPoints;

    // let func = () => {
    //     setTimeout(() => {
    //         setNodes(dijkstra(nodes, startPoint, finishPoint));
    //     }, 100);
    // };

    return (
        <div className="path-finder" style={{textAlign:"center"}}>
            <button 
              style={btnStyle}
              onClick={() => setNodes(dijkstra(nodes, startPoint, finishPoint))}
            >
                disktara
            </button>
            <Grid />
        </div>
    );
};

export default PathFinder;
