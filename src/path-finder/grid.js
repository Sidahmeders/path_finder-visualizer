import React, { useEffect, useContext } from 'react';
import { ContextConsumer } from '../context';
import './styles/grid.css';
import Node from './node';


function Grid() {

    const context = useContext(ContextConsumer);
    const { setNodes, nodes, startAndFinishPoints, setStartAndFinishPoints } = context;
    const startRow = startAndFinishPoints.startPoint.row;
    const startColumn = startAndFinishPoints.startPoint.column;
    const finishRow = startAndFinishPoints.finishPoint.row;
    const finishColumn = startAndFinishPoints.finishPoint.column;

    const pinStartAndFinishPoints = () => {

        const nodeSetUpInput = (targetPoints, startOrFinish, rowOrColumn, limit) => {
            return (
                <input 
                    type="number" placeholder={rowOrColumn}
                    min="0" max={limit}
                    value={targetPoints[startOrFinish][rowOrColumn]}
                    onChange={e => {
                        if(+e.target.value <= limit) {
                            setStartAndFinishPoints({
                                ...targetPoints,
                                [startOrFinish]: {
                                    ...targetPoints[startOrFinish],
                                    [rowOrColumn]: +e.target.value
                                }
                            })}
                        }
                    }
                />
            );
        };
        
        return (
            <div className="nodes-setup">
                <div>
                    <label>set the start node</label>
                    <div>
                        {nodeSetUpInput(startAndFinishPoints, "startPoint", "row", 24)}
                        {nodeSetUpInput(startAndFinishPoints, "startPoint", "column", 49)}
                    </div>
                </div>
                <span>row,</span>
                <span>column</span>
                <div>
                    <label>set the finish node</label>
                    <div>
                        {nodeSetUpInput(startAndFinishPoints, "finishPoint", "row", 24)}
                        {nodeSetUpInput(startAndFinishPoints, "finishPoint", "column", 49)}
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        setNodes(gridRender);
    }, [startAndFinishPoints]);

    const setBackgrounColor = e => {
        // const id = e.target.id.split('-');
        // console.log(+id[0], +id[1]);
        // let newGrid = gridRender().map(row => {
        //     return row.map(node => {
        //         if(node.row === +id[0] && node.column === +id[1]) {
        //             node.isWall = "wall";
        //         }
        //         return node;
        //     });
        // });
        console.log(nodes);
        // setNodes(newGrid);
    };

    const gridRender = () => {
        const rows = [];
        for(let row = 0; row < 25; row++) {
            const columns = [];
            rows.push(columns);
            for(let column = 0; column < 50; column++) {
                columns.push({
                    setBackgrounColor, row, column, distance: Infinity,  
                    previousNode: null, isWall: false, isVisited: false,
                    startNode: startRow === row && startColumn === column ? "start-node" : undefined,
                    finishNode: finishRow === row && finishColumn === column ? "finish-node" : undefined
                });
            }
        }
        return rows;
    };
    
    return (
        <div className="grid">
            <div className="table">
                {pinStartAndFinishPoints()}
                {nodes.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} className="row">
                            {row.map((node, nodeIndex) => {
                                return (<Node key={nodeIndex} props={node}/>);
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;
