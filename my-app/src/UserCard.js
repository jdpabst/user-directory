import React, { useState } from 'react';
import DeleteUser from './DeleteBttn.js';
import NewUser from './NewUser.js'
import './UserCard.css';

function UserCard(props){
    const { data } = props;
    const [items, setItems] = useState(data);
    const [ currentIndex, setCurrentIndex] = useState(0);
    const [nextId, setNextId] = useState(items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1);

    const nextItem = () => {
        // setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
        if(currentIndex < items.length -1){
            setCurrentIndex(currentIndex + 1);
        }
    }

    const prevItem = () => {
        // setCurrentIndex(prevIndex => (prevIndex -1 + items.length) % items.length);
        console.log(items);
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const deleteUser = (id) => {
        console.log('Deleting user with ID:', id)
        const updatedItems = items.filter(item => item.id !== id);
        
        const newCurrentIndex = currentIndex >= updatedItems.length ? updatedItems.length - 1 : currentIndex
        
        setItems(updatedItems);
        setCurrentIndex(newCurrentIndex);
      }

      const addUser = (firstName, lastName, city, country, employer, title, favMovie1, favMovie2, favMovie3) => {
        setItems([...items, {id: nextId, name: {first: firstName, last: lastName}, city: city, country: country, employer: employer, title: title, favoriteMovies: [favMovie1, favMovie2, favMovie3]}])
        setNextId(nextId + 1);
        setCurrentIndex(items.length);

        console.log(items);
    }

    const currentItem = items[currentIndex]


    return(
        <div className="userCardHolder">
            <div className="itemNumberContainer">
                <div className="itemNumber"><b>{ currentIndex + 1 }/{ items.length }</b></div>
            </div>
            <div className="userInfoContainer">
                <h1 className='userNames'>{ currentItem.name.first } { currentItem.name.last }</h1>
                <div className='blueUnderline'></div>
                <ul className="userInfo">
                    <li className="listItemMain"><b>From: </b>{ currentItem.city }, { currentItem.country }</li>
                    <li className="listItemMain"><b>Job Title: </b>{ currentItem.title }</li>
                    <li className="listItemMain"><b>Employer: </b>{ currentItem.employer }</li>
                        <ol className="movieList"><b>Favorite Movies:</b>
                            { currentItem.favoriteMovies.map((item, index) => (
                                <li className="movies" key= { index }>{ item }</li>
                            ))}
                        </ol>

                </ul>
            </div>
            <button className="prevBttn" onClick={ prevItem }>&#60; Previous</button>
            <button className="nextBttn" onClick={ nextItem }>Next &#62;</button>
            <div className="editDeleteNewBttnsContainer">
                <button className="blueBttns shorter">Edit</button>
                <DeleteUser deleteUser={ deleteUser } id={ currentItem.id }/>
                <NewUser addUser={ addUser }/>
            </div>
        </div>
    )
}

export default UserCard;