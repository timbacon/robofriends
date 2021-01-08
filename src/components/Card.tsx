import React from 'react';
import { IRobot } from './MainPage';


const Card = (robot: IRobot) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${robot.id}?size=200x200`} alt='robots'/>
      <div>
        <h2>{ robot.name }</h2>
        <p>{ robot.email }</p>
      </div>
    </div>
  )
}



export default Card;
