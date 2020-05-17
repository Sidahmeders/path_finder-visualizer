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
