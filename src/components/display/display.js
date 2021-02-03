
import React, {Component} from 'react'


function Display(props){
    return(
        <div className = "Display">
            
            <em>User Score:</em>
            {props.score}<br/><br/>
            <strong>Question:</strong>
            {props.data.question}<br/>
            <strong>Value:</strong>
            {props.data.value}<br/>
            <strong>Category:</strong>
            {props.category} <br/>

            <imput type="text" onChange={props.handleChange}
            value={props.userAnswer} />
            
            
        </div>
    )

}

export default Display;