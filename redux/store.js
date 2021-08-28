import { createStore } from "redux";
import noteReducer from "./reducers/note.reducer";

export default createStore(noteReducer)