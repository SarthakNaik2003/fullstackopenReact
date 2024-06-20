import React, { useEffect, useState } from 'react';
import Filter from './component/Filter';
import PersonForm from './component/PersonForm';
import Persons from './component/Person';
import contactService from "./service/contactInfo";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    contactService.getAll()
      .then(contacts => {
        setPersons(contacts);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);
  
  console.log(persons)
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const addPerson = (newName, newNumber) => {
    const nameExists = persons.some(person => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to the phonebook.`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    contactService.create(newPerson)
      .then(addedPerson => {
        setPersons([...persons, addedPerson]);
      })
      .catch(error => {
        console.error('Error adding person:', error);
      });
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchQuery} onChange={handleSearchChange} />
      <h3>Add a new person</h3>
      <PersonForm addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
