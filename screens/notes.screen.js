import React from 'react';
import { useState } from 'react';
import NoteItem from '../component/NoteItem';
//import noteRealm from '../models/note.model';

const NoteScreen=({route,navigation})=>{
    //console.log(noteRealm.objects('NOTE_SCHEMA'))
    return(
       <NoteItem route={route}/> 
    )
}


export default NoteScreen;