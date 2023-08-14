import React, { useState } from 'react'
import './Delete.css';

function Delete(props){

    return (
        <div>
            <button onClick={ props.deleteUser }>DELETE</button>
        </div>
    )

}

export default Delete;