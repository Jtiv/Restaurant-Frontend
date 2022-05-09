import React from 'react'

function Summary(props) {
  
  function createHtml() {
    return {__html: `${props.summary}`};
  }
  return (
    <div dangerouslySetInnerHTML={createHtml()} className='summary'/>
  )
}

export default Summary;
