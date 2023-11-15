import { useEffect, useState } from 'react'
import './App.css'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import Board from './components/Board/Board'
import styled from 'styled-components'
import Announce from './components/Announce/Announce'

function App() {
  const [round, setRound] = useState(1)
  const [player, setPlayer] = useState(false)
  const [xArr, setXArr] = useState([])
  const [oArr, setOArr] = useState([])
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [showWinner, setShowWinner] = useState(null)

  function Winner(){
    if (!player){
      setShowWinner("O is winner")
      setScoreO(scoreO+1)
    }else{
      setShowWinner("X is winner")
      setScoreX(scoreX+1)
    }
  }

  function Draw(){
    setShowWinner("Draw")
  }

  function handleRestart(){
    if ((round)%2 == 0){
      setPlayer(false)
    }else{
      setPlayer(true)
    }
    setXArr([])
    setOArr([])
    setShowWinner(null)
    setRound(round+1)
  }

  function checkWinner(arr){
    if (arr.includes(1)&&arr.includes(2)&&arr.includes(3)){
      Winner()
    }
    else if (arr.includes(4)&&arr.includes(5)&&arr.includes(6)){
      Winner()
    }
    else if (arr.includes(7)&&arr.includes(8)&&arr.includes(9)){
      Winner()
    }
    else if (arr.includes(1)&&arr.includes(5)&&arr.includes(9)){
      Winner()
    }
    else if (arr.includes(3)&&arr.includes(5)&&arr.includes(7)){
      Winner()
    }
    else if ((xArr.length + oArr.length) == 9){
      Draw()
    }
  }

  function addArr(id){
    if(!player){
      setXArr([...xArr, id])
    }else{
      setOArr([...oArr, id])
    }
  }

  function handleClick(id){
    addArr(id);
    setPlayer(!player);
  }

  useEffect(()=>{
    checkWinner(xArr)
  }, [xArr])

  useEffect(()=>{
    checkWinner(oArr)
  }, [oArr])

  return (
    <>
      <ScoreBoardContainer>
        <ScoreBoard player={"player 1"} sign={"x"} score={scoreX}/>
        <Announce showWinner={showWinner} onClick={()=>handleRestart()} player={player} round={round}/>
        <ScoreBoard player={"player 2"} sign={"o"} score={scoreO}/>
      </ScoreBoardContainer>

      {(
        (!showWinner) &&
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BoardContainer>
            <Board id={1} xArr={xArr} oArr={oArr} onClick={()=>handleClick(1)}/>
            <Board id={2} xArr={xArr} oArr={oArr} onClick={()=>handleClick(2)}/>
            <Board id={3} xArr={xArr} oArr={oArr} onClick={()=>handleClick(3)}/>
          </BoardContainer>
          <BoardContainer>
            <Board id={4} xArr={xArr} oArr={oArr} onClick={()=>handleClick(4)}/>
            <Board id={5} xArr={xArr} oArr={oArr} onClick={()=>handleClick(5)}/>
            <Board id={6} xArr={xArr} oArr={oArr} onClick={()=>handleClick(6)}/>
          </BoardContainer>
          <BoardContainer>
            <Board id={7} xArr={xArr} oArr={oArr} onClick={()=>handleClick(7)}/>
            <Board id={8} xArr={xArr} oArr={oArr} onClick={()=>handleClick(8)}/>
            <Board id={9} xArr={xArr} oArr={oArr} onClick={()=>handleClick(9)}/>
          </BoardContainer>
        </div>
      )}
    
    </>
  )
}

const ScoreBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
`

const BoardContainer = styled.div`
  margin: 0 auto;
  display: flex;
`

export default App
