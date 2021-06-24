import React, { useEffect, useState } from 'react'
import Square from './Square'

const initialState = ["","","","","","","","",""];
const Game = () => {
    const [gameState, setGameState] = useState(initialState)
    const [isX, setIsX] = useState(false);


    const onSquare = (i) => {
       let strings = Array.from(gameState);
       strings[i] = isX ? "X" : "0";
       setGameState(strings);
       setIsX(!isX)
    }
    useEffect(() => {
       const winner = calculateWinner();
       if(winner){
           alert(`${winner} has won the Game`);
           setGameState(initialState);
       }
    }, [gameState])
    const calculateWinner = () => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
          }
        }
        return null;
    }
    
    
    return (
        <div className="app-header">
        <h1 className="heading-text">Tic Tac Toe</h1>
        <div className="row">
            <Square className="b-bottom-right" state={gameState[0]} onClick={()=> onSquare(0)}/>
            <Square className="b-bottom-right" state={gameState[1]} onClick={()=> onSquare(1)}/>
            <Square className="b-bottom" state={gameState[2]} onClick={()=> onSquare(2)}/>
        </div>
        <div className="row">
        <Square className="b-bottom-right" state={gameState[3]} onClick={()=> onSquare(3)}/>
        <Square className="b-bottom-right" state={gameState[4]} onClick={()=> onSquare(4)}/>
        <Square className="b-bottom" state={gameState[5]} onClick={()=> onSquare(5)}/>
    </div>
    <div  className="row">
    <Square className="b-right" state={gameState[6]} onClick={()=> onSquare(6)}/>
    <Square className="b-right" state={gameState[7]} onClick={()=> onSquare(7)}/>
    <Square state={gameState[8]} onClick={()=> onSquare(8)}/>
</div>
         <button onClick={() => setGameState(initialState)}>Clear</button>
            
        </div>
    )
}

export default Game

