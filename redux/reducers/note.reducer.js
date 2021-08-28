import { combineReducers } from "redux";


const INITIAL_STATE={
    notes:[]
}


const notesReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "ADD_NOTE":
            
        break;
        case "REMOVE_NOTE":
        break;
        case "EDIT_NOTE":
        break;
        default:
            return state
    }
}

export default combineReducers({
    notes:notesReducer
})