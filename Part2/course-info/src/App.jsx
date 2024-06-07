import React, { useEffect } from 'react';




const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
];

const Header = ({ name, totalExercises }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>Total exercises: {totalExercises}</p>
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <>
      <p>{name} = {exercises}</p>
    </>
  );
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p><strong>Total exercises: {totalExercises}</strong></p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} totalExercises={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
      <Content parts={course.parts} />
    </>
  );
};

const App = () => {
  return (
    <>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
