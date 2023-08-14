import React, { useState } from 'react';
import './UserCard.css';

function UserCard(props){
    const { data } = props;
    const [items, setItems] = useState(data);
    const [ currentIndex, setCurrentIndex] = useState(0);

    const nextItem = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }

    const prevItem = () => {
        setCurrentIndex(prevIndex => (prevIndex -1 + items.length) % items.length);
    }

    const currentItem = items[currentIndex]


    return(
        <div className="userCardHolder">
            <div className="itemNumberContainer">
                <div className="itemNumber"><b>{ currentItem.id }/{ items.length }</b></div>
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
        </div>
    )
}

export default UserCard;