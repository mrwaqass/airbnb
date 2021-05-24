export const initialState = {
    isLoading: true,
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RENDER_COMPONENT':
            return {...state, isLoading: false}
        default:
            return state
    }
}
