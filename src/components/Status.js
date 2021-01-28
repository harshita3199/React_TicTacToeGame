import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component{

   

    handlesetPlayer(e){
        this.props.setPlayer(e)
    }

    renderHtml(){
        if(this.props.winner){
            return (
            <h2>Winner is {this.props.winner}</h2>
            
            
            )
        }
        else{
            return(
                this.props.player ? 
                <h3>Next Player is {this.props.player} </h3> : <Player player={(e)=>this.handlesetPlayer(e)} />
            )
        }
    }
    render(){
        return (
            <span>{this.renderHtml()}</span>
        )
    }
}

export default Status;