import React from 'react';

function Timer(props) {
  return (
    <div>
      <h3>Ready in {props.readyInMinutes}</h3>
    </div>
  );
}

export default Timer;