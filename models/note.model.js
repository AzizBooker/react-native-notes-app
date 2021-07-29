import moment from "moment"

class Note{

    constructor(id,title,text){
        this.id=id
        this.dateCreate= moment().format('MMM do YY')
        this.dateLastEdited=moment().format('MMM do YY')
        this.title=title
        this.text=text
    }

    getDateLastEdited(){

        return this.dateLastEdited.toString()
    }
}

export default Note