const Themes = (state = '', action) =>{
    switch (action.type) {
        case 'DARK':
            return 'Dark'
        case 'LIGHT':
            return 'Light'
            break;
        default:
            return state
    }
}

export default Themes