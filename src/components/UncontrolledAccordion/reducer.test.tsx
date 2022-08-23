import {reducer, TOGGLE_CONSTANT} from "./reducer";

test("reducer should change value to opposite", ()=> {

    const startState = {collapsed: false}
    const endState = reducer(startState,{type: TOGGLE_CONSTANT})
    const endStateAssumption = {
        collapsed: true
    }

    expect(endState.collapsed).toBe(true)
    expect(startState.collapsed).toBe(false)
    expect(()=>{reducer(startState,{type: "BROKEN_TYPE"})}).toThrowError()

    expect(endState).toEqual(endStateAssumption)
})