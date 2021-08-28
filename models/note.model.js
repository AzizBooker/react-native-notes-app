import moment from "moment"
import { v4 as genId4} from 'uuid'


class Note{

    
    constructor(title,text){
        this.id=genId4();
        this.dateCreate= moment().format('MMM do YYYY')
        this.dateLastEdited=moment().format('MMM do YYYY')
        this.isFavorite=false
        this.title=title
        this.text=text
    }

    getDateLastEdited(){

        return this.dateLastEdited.toString()
    }
    setDateLastEdited(){
        this.dateLastEdited=moment().format('MMM do YYYY')
    }
    setTitle(text){
        this.title=text
    }
    setText(text){
        this.text=text
    }
    toggleFavorite(){
        this.isFavorite=!this.isFavorite
    }
}

/*
const NoteSchema={
    name: NOTE_SCHEMA,
    primaryKey: "_id",
    properties:{
        _id:"string",
        title:{type:"string",default:""},
        text:{type:"string",default:""},
        favorite:{type:"bool",default:"false"},
        dateLastEdited:"string"
    }
}
*/


export default Note;