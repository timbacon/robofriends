import * as actions from './actions'

import { 
    CHANGE_SEARCH_FIELD,
    // REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    // REQUEST_ROBOTS_SUCCESS 
} from "./constants";

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
    test('should create an action to search robots', () => {
        const text = 'woo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })
    
})

describe('requestRobots', () => {
    test('should requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedAction);
    })

    // test('should requesting robots API - success', () => {
    //     const store = mockStore();
    //     const expectedAction = [{
    //         type: REQUEST_ROBOTS_PENDING
    //     }, 
    //     {
    //         type: REQUEST_ROBOTS_SUCCESS,
    //         payload: [{
    //             id: '123',
    //             name: 'test',
    //             email: 'test@test.com'
    //         }]
    //     }]
    //     store.dispatch(actions.requestRobots()).then(() => {
    //         expect(store.getActions()).toEqual(expectedAction);
    //     });
    // })
    
})