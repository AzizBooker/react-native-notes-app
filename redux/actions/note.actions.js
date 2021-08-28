


export const addNote=(note)=>({
    type:"ADD_NOTE",
    payload:note
})
export const removeNote=(uuid)=>({
    type:"REMOVE_NOTE",
    payload:uuid
})
export const EditNote=(uuid)=>({
    type:"EDIT_NOTE",
    payload:uuid
})