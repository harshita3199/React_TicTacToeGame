// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import React from 'react';


import Status from './components/Status';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      board: Array(9).fill(null),
      player: null,
      winner: null,
    }
  }

  checkWinner(){
    let winLines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    this.checkMatch(winLines);
  }

  checkMatch(winLines){
    for(let index=0;index<winLines.length;index++){
      const [a,b,c]=winLines[index];
      let board=this.state.board;
      if(board[a] && board[a] === board[b] && board[a]=== board[c]){
        this.setState({
          winner: this.state.player,
        })
        alert( 'Player '+this.state.player +' won');
        
      }
    }
  }

  handleClick(index){
    if(this.state.player && !this.state.winner){
      let newBoard= this.state.board;
      if(this.state.board[index] === null){
        newBoard[index]= this.state.player;
    
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
        })

        this.checkWinner();
      }
    }
    
      console.log(this.state.board);
    }
    setPlayer(player){
      this.setState({
        player: player,
      })
      
    }
    reset(){
      this.setState({
        player:null,
        winner: null,
        board: Array(9).fill(null),
      })
    }

    renderBoxes(){
      return(
      this.state.board.map(
        (box,index) => 
          <div className="box" 
            key={index} 
            onClick= {()=> this.handleClick(index)}>
            {box}
          </div>
          )
      )
    }
  
  render(){
      
      
  return (
    <div className="container">
        <h1>Tic Tae Toe Game </h1>
        <Status player={this.state.player}  
        setPlayer={(e)=> this.setPlayer(e)} 
        winner={this.state.winner}/>
        <div className="Board">
          {this.renderBoxes()}
        </div>
        <button className="button" disabled={!this.state.winner} onClick={()=> this.reset()}>Reset</button>
    </div>
    
    );
  }

}

export default App;
