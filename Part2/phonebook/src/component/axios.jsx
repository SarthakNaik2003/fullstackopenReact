import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Exe11() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/notes')
            .then(res => { setPerson(res.data); console.log(res.data) })
            .catch((err) => { console.error(Error, err) })

    }, [])
    return (
        <>
            <div>
                {person.map(person => (
                    <div key={person.id}>
                        Name:- {person.name}  :
                        Number:- {person.number}
                    </div>
                ))}
            </div>
        </>
    )
}