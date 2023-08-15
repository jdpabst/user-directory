import React, { useState } from 'react';

function NewUser(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <div>
            <button className="blueBttns shorter" onClick={ () => setIsOpen(true)}>New</button>
            {/* <button className="blueBttns shorter" onClick={ props.addUser }>New</button> */}
            { isOpen && (
                <div>
                    <form>
                        <label>Enter Firstname:
                            <input 
                                type='text'
                                name='firstName'
                                value={inputs.firstName || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Enter Lastname:
                            <input 
                                type="text"
                                name="lastName"
                                value={inputs.lastName || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Enter City:
                            <input 
                                type="text"
                                name="city"
                                value={inputs.city || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Enter Country:
                            <input 
                                type="text"
                                name="country"
                                value={inputs.country || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Enter Employer:
                            <input 
                                type="text"
                                name="employer"
                                value={inputs.employer || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Enter Title:
                            <input 
                                type="text"
                                name="title"
                                value={inputs.title || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Enter Favorite Movies:
                            <input 
                                type="text"
                                name="favMovie1"
                                value={inputs.favMovie1 || ''}
                                onChange={handleChange}
                            />
                            <input 
                                type="text"
                                name="favMovie2"
                                value={inputs.favMovie2 || ''}
                                onChange={handleChange}
                            />
                            <input 
                                type="text"
                                name="favMovie3"
                                value={inputs.favMovie3 || ''}
                                onChange={handleChange}
                            />
                        </label>
                    </form>
                    <button onClick={() => {setIsOpen(false); props.addUser(inputs.firstName, inputs.lastName, inputs.city, inputs.country, inputs.employer, inputs.title, inputs.favMovie1, inputs.favMovie2, inputs.favMovie3)}}>Add User</button>
                </div>
            )}
        </div>
    )
}

export default NewUser;