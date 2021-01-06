import React, { useEffect, useMemo } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css'
import Header from '../components/Header';

const MainPage = ({ searchField, onSearchChange, onRequestRobots, robots, isPending }) => {
  
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots])

  const memoizedHeader = useMemo(() => <Header />, [])
  
  const filteredRobots = robots => robots.filter(robot => {
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
