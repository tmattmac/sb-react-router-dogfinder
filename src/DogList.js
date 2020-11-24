import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DogDetails from './DogDetails';
import './DogList.css';

const DogList = ({ dogs }) => {
    return (
        <div class="DogList">
            <h1>The Dogs</h1>
            <ul class="DogList-list">
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <img src={dog.src} alt={dog.name} />
                        <Link to={`/dogs/${dog.name}`}>
                            {dog.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DogList;