import React from 'react'

const Board = (props) => {
  return (
        <button  
            disabled={(props.xArr.includes(props.id)||props.oArr.includes(props.id))?true:false}
            onClick={props.onClick}
            style={{width: '100px', height:'100px', fontSize: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {props.xArr.includes(props.id)&&<div>x</div>||props.oArr.includes(props.id)&&<div>o</div>}
        </button>
  )
}

export default Board