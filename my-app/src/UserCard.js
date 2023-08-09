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
            <div>
                <div>{ currentItem.id }/{ items.length }</div>
                <h1>{ currentItem.name.first } { currentItem.name.last }</h1>
                <ul>
                    <li><b>From: </b>{ currentItem.city }, { currentItem.country }</li>
                    <li><b>Job Title: </b>{ currentItem.title }</li>
                    <li><b>Employer: </b>{ currentItem.employer }</li>
                        <ol><b>Favorite Movies:</b>
                            { currentItem.favoriteMovies.map((item, index) => (
                                <li key= { index }>{ item }</li>
                            ))}
                        </ol>

                </ul>
            </div>
        </div>
    )
}

export default UserCard;