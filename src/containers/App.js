import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

const App = ({ searchField, onSearchChange, onRequestRobots, robots, isPending }) => {
  
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots])

  const memoizedHeader = useMemo(() => <Header />, [])
  
  const filteredRobots = robots.filter(robot => {
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
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>  
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
