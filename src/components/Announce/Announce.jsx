import React from 'react'
import { ButtonStyle, Container, TextStyle } from './style'

const Announce = (props) => {
  return (
    <Container>
        {props.showWinner && <TextStyle>{props.showWinner}</TextStyle>}
        {props.showWinner && <ButtonStyle onClick={props.onClick}>Restart</ButtonStyle>}
        {!props.showWinner && <div>{props.player?<TextStyle>round {props.round} : O</TextStyle>:<TextStyle>round {props.round} : X</TextStyle>}</div>}
    </Container>
  )
}

export default Announce
