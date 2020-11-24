import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name === name);
    if (!dog) return <Redirect to="/dogs" />;

    return (
        <div class="DogDetails">
            <h1>{dog.name}, age {dog.age}</h1>
            <img src={dog.src} alt={dog.name} />
            <h2>Facts:</h2>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>
                        {fact}
                    </li>
                ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default DogDetails;