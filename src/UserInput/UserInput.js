import React from 'react';
import './Style.css';

const userInput = (props) => {
    return(
        <div className="Test">
            <input type="text" onChange={props.changeName} value={props.userName}/>
        </div>
    );
}
export default userInput; 