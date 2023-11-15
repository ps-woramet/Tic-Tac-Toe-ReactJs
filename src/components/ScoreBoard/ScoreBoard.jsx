import React from 'react'
import { MyStyle } from './style'

const ScoreBoard = (props) => {
  return (
    <MyStyle>
        <div>{props.player}</div>
        <div>{props.sign}</div>
        <div>Score</div>
        <div>{props.score}</div>
    </MyStyle>
  )
}

export default ScoreBoard
