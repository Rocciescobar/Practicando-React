import React from 'react';
import Header from './Header';
import List from './List';
import Section from './Section';

const data = [{bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quae similique, voluptatum molestias voluptatem inventore magni atque obcaecati rerum quo cupiditate quis libero recusandae sunt tempore quasi consequatur non perspiciatis.', url: 'yo.jpg'}];
const hobbies = ['Bailar', 'Escuchar música', 'Ver series'];

const App = () => (
  <div>
    <Header />
    <Section data={data[0]} />
    <List hobbies={hobbies}/>
  </div>
)

export default App