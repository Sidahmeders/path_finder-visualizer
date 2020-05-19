import React from 'react';
import './styles/node.css';


function Node({id, startNode, finishNode, setBackgrounColor}) {

    return(
        <div 
          id={id} 
          className={startNode || finishNode || "none"}
          onClick={setBackgrounColor}
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
