import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const Square=(props )=>{
    
       return(
        <>
    
            <button className="square" onClick={()=>props.whenclickonbox()} >
               {props.value} 
            </button>
         </>
        )
    }


export default Square;