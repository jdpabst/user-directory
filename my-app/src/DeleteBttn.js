import React from 'react';


function DeleteUser(props){


    return (
        <div>
            <button className="blueBttns longer" onClick={() => { props.deleteUser(props.id)} } >Delete</button>
        </div>
    )
}

export default DeleteUser;