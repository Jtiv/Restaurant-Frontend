import React from 'react';

function Timer(props) {
  return (
    <div className='timer'>
      <h3>Ready in {props.readyInMinutes}</h3>
    </div>
  );
}

export default Timer;