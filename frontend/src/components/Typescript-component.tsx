import React, {FC} from 'react';
import '../person/person.css'

interface person {
    name: string;
    age: number;
    likes?: string; // ? makes the type optional.
}

const Person:FC<person> = (props) => {

    return (
        <div className='person-container'>
            <h2>This persons name is {props.name}</h2>
            <p>This person is {props.age} years old</p>
            <p>This person like {props.likes}</p>
        </div>
    );
}

export default Person;