import React from 'react';

const Persons = ({ persons }) => {
    console.log(persons)
    return (
        <ul>
            {persons.map((person, index) => (
                <li key={index}>{person.name} - {person.number}</li>
            ))}
        </ul>
    );
};

export default Persons;
