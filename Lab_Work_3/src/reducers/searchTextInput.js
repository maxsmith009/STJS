const searchTextInput = (state = "()", action) => {
    switch (action.type) {
        case 'ADD_SEARCH_TEXT':
            return action.text;
        default:
            return state
    }
};

export default searchTextInput