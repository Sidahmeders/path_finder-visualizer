
export const dijkstra = (grid, startPoint, finishPoint) => {
    if (!startPoint || !finishPoint) return;
    if (startPoint.row === finishPoint.row && startPoint.column === finishPoint.column) return;

    const flatGridCopy = copyAllNodes(grid);
    let currentNode = false;
    flatGridCopy.forEach(node => {
        if (node.startNode) currentNode = node;
        if (currentNode) {
            markVisitedNodes(node);
        }
        if(node.finishNode) currentNode = false;
    });

    let newGrid = new Array(
        Math.ceil(flatGridCopy.length / grid.length / 2))
        .fill().map(_ => flatGridCopy.splice(0, grid.length * 2)
    );
    

    return newGrid;
};

function copyAllNodes(grid) {
    const gridCopy = [];
    for (let row of grid) {
        for (let node of row) {
            gridCopy.push(node);
        }
    }
    return gridCopy;
};

function markVisitedNodes(node) {
    
    if (!node.startNode && !node.finishNode && !node.isWall) {
        node.isVisited = "visited";
        console.log(node.isWall);
    }
};
