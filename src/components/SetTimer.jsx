import React, { useRef } from 'react'


const SetTimer = () => {

const timeRef = useRef(null);

function handleClcikStart(){
    timeRef.current = setInterval(()=>{
        console.log("running");
    }, 1000);

};


function handleClcikClose(){
    clearInterval(timeRef.current);
}

  return (
    <div>
        <button onClick={handleClcikStart}>Start</button>
        <button onClick={handleClcikClose}>Close</button>
    </div>
  )
}

export default SetTimer