
const listReducter = (state = [], action) => {
    console.log(action.payload)
    return {
        ...state,
        list: action.payload || []
    };
}




export default listReducter