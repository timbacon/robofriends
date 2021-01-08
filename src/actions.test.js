import * as actions from './actions'

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS 
} from "./constants";

describe('setSearchField', () => {
    test('should create an action to seach robots', () => {
        const text = 'woo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })
    
})

describe('requestRobots', () => {
    test('should request robots API', () => {
        
    })
    
})