import React, { useMemo } from 'react';
import CounterButton from './CounterButton';


const Header = () => {
    const memoizedCounterButton = useMemo(() => <CounterButton />, [])
    return (
        <div>
            <h1 className='f1'>RoboFriends</h1>
            {memoizedCounterButton}
        </div>
    )
};

export default Header;