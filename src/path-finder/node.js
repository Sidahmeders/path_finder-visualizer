import React from 'react';
import './styles/node.css';


function Node({ props }) {

  const {
    setBackgrounColor, startNode, finishNode, row, 
    column, isVisited, isWall, distance, previousNode
  } = props;

    return (
        <div
          id={`${row}-${column}`}
          className={ isWall || isVisited || startNode || finishNode || `node`}
          onClick={setBackgrounColor}
          distance={distance}
          previousnode={previousNode}
        >
        </div>
    );
};

export default Node;


//! bad algorithm
// let n = 100000;
// var now = new Date().getTime();


// for (let x = 0; x <= n; x++) {
//   if(x !== n) {
//     console.log("this is not the Target number:", x);
//   } else {
//     console.log(`${n} is the target number..`);
//     console.log(`${new Date().getTime() - now}.ms`);
//   }
// }


//* good algorithm
// let n = 100000;
// var now = new Date().getTime();


// for (let x = 0; x <= n; x++) {
//   if(x !== n) {
//     console.log("this is not the Target number:", x);
//     x += 99
//   } else {
//     console.log(`${n} is the target number..`);
//     console.log(`${new Date().getTime() - now}.ms`);
//   }
// }
