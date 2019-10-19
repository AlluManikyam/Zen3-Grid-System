import React from 'react';

function Box(props) {
    let colWidth=parseFloat(100/props.columnsCount)+'%'
    return <div className='p-0' style={{width:colWidth}}>
      <div className='box'>
          100px Height Box
    </div>
  </div>
}

export default Box;