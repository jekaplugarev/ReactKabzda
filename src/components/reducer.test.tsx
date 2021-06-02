import {reducer, StateType, toggleCollapsed} from './reducer'
import {action} from '@storybook/addon-actions';

test('reducer should change to opposite value', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: toggleCollapsed})

    //expection
    expect(newState.collapsed).toBe(true)
})

test('reducer should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: toggleCollapsed})

    //expection
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: toggleCollapsed})

    //expection
    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})