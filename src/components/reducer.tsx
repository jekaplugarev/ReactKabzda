export type ActionType = {
    type: string
}
export const toggleCollapsed = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case toggleCollapsed:
            const stateCopy = {...state}
            stateCopy.collapsed = !stateCopy.collapsed
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type')
    }
}