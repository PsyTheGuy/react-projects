import React from 'react';

const List = (props) => {
  const { people } = props;
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return (
          <div className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
