import React from 'react';

const List = ({hobbies}) => (
  <ul className='mx-5'>
    {
      hobbies.map(hobbie => {
        return <li key={hobbie}>{hobbie}</li>
      })
    }
  </ul>
)

export default List