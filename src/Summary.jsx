import React from 'react'

function Summary(props) {
  
  function createMarkup() {
    return {__html: `${props.summary}`};
  }
  return (
    <div dangerouslySetInnerHTML={createMarkup()} />
  )
}

export default Summary;
