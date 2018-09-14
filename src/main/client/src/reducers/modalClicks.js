const initialState = {
    count: 0,
};

const modalClicks = (state = initialState, action) => {
    const newState = state;
    switch (action.type) {
        case 'INCREMENT_COUNT':
            newState.count += 1;
            return {...state, newState};
        default:
            return state;
    }
};

export default modalClicks;
