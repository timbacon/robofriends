import React, { useEffect, useMemo } from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'
import './MainPage.css'
import Header from './Header';

export interface IRobot {
  name: string, 
  email: string, 
  id: number
}

interface IProps {
  searchField: string,
  onSearchChange: any,
  onRequestRobots: any,
  robots: Array<IRobot>,
  isPending: boolean
}

const MainPage = ({ searchField, onSearchChange, onRequestRobots, robots, isPending }: IProps) => {
  
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots])

  const memoizedHeader = useMemo(() => <Header />, [])
  
  const filteredRobots = (robots: Array<IRobot>) => robots.filter((robot: IRobot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  if (isPending){
    return <h1>Loading...</h1>
  } else {
    return (
      <div className='tc'>
        {memoizedHeader}
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots(robots)}/>
          </ErrorBoundry>  
        </Scroll>
      </div>
    )
  }
}

export default MainPage;
