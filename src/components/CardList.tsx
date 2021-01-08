import React, { Fragment } from 'react';
import Card from './Card'
import { IRobot } from './MainPage';

const CardList = ({robots}: any) => {
  return (
    <Fragment>
      {
        robots.map((user: IRobot, i: number) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}/>
        );
      })
    }
  </Fragment>
  )
}

export default CardList;
