import React, { Component } from 'react'
import Square from './Square';


 class Board extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             squares : Array(9).fill(null),//here we are declearing one empty array to store the values of X and O
             xIsNext: true,//it is the variable which will change frequently as condtion will change on clicking the square button
        }
       // console.log(this.state.squares);
    }



    handleClick(i) {//it is the function which will run when square button will clicked by user
        const squares = this.state.squares//here we are storing empty array in squares variable
        //console.log(squares);
        if(calculateWinner(squares) || squares[i]){
            return ;
        }
        else{
        squares[i] = this.state.xIsNext ? 'X' :'O';
        }

        this.setState({ 
            //squares: squares,
            xIsNext: !this.state.xIsNext,//it is the alternate value of X and O if isnext is false then on nextchance it will get true
        })

    }

     rest=()=>{
    this.setState({
        squares:Array(9).fill(null),//it is the restart functionality when we'll click on restart then all the arrays index or all boxes will get empty
    })
   }
    
    
   
    

    renderSquare (i) {
       return  <Square value={this.state.squares[i]} whenclickonbox={ () => this.handleClick(i)}/>
    }//it is the component rendering we are  using square component here inside the rendersquare method with one parameter 'i' i.e index
     //and also we are passing one  method 

  

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = 'Winner:  ' + winner;
        }

       
        else  {
            status = 'Next Player is :  ' + (this.state.xIsNext ? 'X' :'O');
        }

        return (
            <div>
            <div className="head"><h1>Tic Tae Toe 2021</h1></div>
            <div className="status">{status}</div>
            <div className="board">
            <div className="board-row">
                {this.renderSquare(0)}     
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
               <button className="restr" onClick={this.rest}>Restart</button>  
            </div>
        )
    }
}

export default Board


function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i=0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}