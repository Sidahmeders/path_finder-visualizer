import React from 'react';
import './styles/path_finder.css';
import Node from './node';



function PathFinder() {

    const setBackgrounColor = e => e.target.style.backgroundColor = '#000';
    
    // const findShortestPath = () => {
    //     const array = renderTable();

    //     return array.map(row => {

    //         return row.map(column => {
    //             return column = "cool"
    //         });
    //     });
    // };

    let [nodes, setNodes] = React.useState([]);
    
    React.useEffect(() => {
        let tempNodes = renderTable().map((row, rowIndex) => {
            return row.map((column, columnIndex) => {
                if(rowIndex === 6 && columnIndex === 5) column = <Node id="node" key={column} 
                                                        startNode="start-node" 
                                                        setBackgrounColor={setBackgrounColor}
                                                       />;
                if(rowIndex === 17 && columnIndex === 43) column = <Node id="node" key={column} 
                                                          finishNode="finish-node" 
                                                          setBackgrounColor={setBackgrounColor}
                                                         />;
                return column;
            });
        });

        setNodes(tempNodes);
    }, []);

    const renderTable = () => {
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


    return(
        <div className="path-finder">
            <div className="table">
                {nodes.map((item, i) => <div className="row" key={i}>{item}</div>)}
            </div>
        </div>
    );
};

export default PathFinder;
