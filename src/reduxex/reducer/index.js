const tasteReducer = (action) => {
    switch (action.type) {
        case 'TASTEPOST1':
            return 1;
        case 'TASTEPOST2':
            return 2;
        case 'TASTEPOST0':
            return 0;
        default:
            return 0;
    }
}

export default tasteReducer