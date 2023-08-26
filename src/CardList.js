import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cards = robots.map(item => {
    return <Card id={item.id} name={item.name} email={item.email} key={item.id} />
  });

  return (
    <>
      {cards}
    </>
  );
}

export default CardList;