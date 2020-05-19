import React, { useState, useEffect } from 'react';
import './styles/grid.css';
import Node from './node';


function Grid() {

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

    const pinStartAndFinishPoints = (changeNodesPosition) => {

        const nodeSetUpInput = (rowOrColumn, targetPoints, startOrFinish, limit) => {
            return (
                <input 
                    type="number" placeholder={rowOrColumn} 
                    min="0" max={limit}
                    value={targetPoints[startOrFinish][rowOrColumn]}
                    onChange={e => {
                        if(+e.target.value <= limit) {
                            changeNodesPosition({
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
                        {nodeSetUpInput("row", startAndFinishPoints, "startPoint", 24)}
                        {nodeSetUpInput("column", startAndFinishPoints, "startPoint", 49)}
                    </div>
                </div>
                <span>row</span>
                <span>column</span>
                <div>
                    <label>set the finish node</label>
                    <div>
                        {nodeSetUpInput("row", startAndFinishPoints, "finishPoint", 24)}
                        {nodeSetUpInput("column", startAndFinishPoints, "finishPoint", 49)}
                    </div>
                </div>
            </div>
        );
    };

    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let tempNodes = gridRender().map((row, rowIndex) => {
            return row.map((column, columnIndex) => {
                if(
                    rowIndex === startAndFinishPoints.startPoint.row && 
                    columnIndex === startAndFinishPoints.startPoint.column
                ) column = <Node id="node" key={"start-node"} 
                    startNode="start-node" setBackgrounColor={setBackgrounColor}/>;
                if(
                    rowIndex === startAndFinishPoints.finishPoint.row && 
                    columnIndex === startAndFinishPoints.finishPoint.column
                ) column = <Node id="node" key={"finish-node"} 
                    finishNode="finish-node" setBackgrounColor={setBackgrounColor}/>;
                return column;
            });
        });

        setNodes(tempNodes);
    }, [startAndFinishPoints]);

    const gridRender = () => {
        const rows = [];
        const columns = [];
        for(let row = 0; row < 25; row++) {
            rows.push(columns);
        }
        for(let column = 0; column < 50; column++) {
            columns.push(<Node id="node" key={column} setBackgrounColor={setBackgrounColor}/>);
        }
        return rows;
    };

    const setBackgrounColor = e => e.target.style.backgroundColor = '#000';
    
    const findStartAndFinshNode = () => {
        const startAndFinishColumns = [];
        nodes.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                if (column.key === "start-node") {
                    startAndFinishColumns.push({startNode:{rowIndex, columnIndex}});
                } else if (column.key === "finish-node") {
                    startAndFinishColumns.push({finishNode:{rowIndex, columnIndex}});
                }
            });
        });
        return startAndFinishColumns;
    };

    const startAndFinishNodes = findStartAndFinshNode();

    return(
        <div className="grid">
            <div className="table">
                {pinStartAndFinishPoints(setStartAndFinishPoints)}
                {nodes.map((item, i) => <div className="row" key={i}>{item}</div>)}
            </div>
        </div>
    );
};

export default Grid;
