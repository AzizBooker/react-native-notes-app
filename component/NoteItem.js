import React from 'react'
import { useState } from 'react'
import { View,Text,TextInput,StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import Colors from '../theme/colors.theme'
import Note from '../models/note.model'
import NotesData from '../data/DummyData.data'
const NoteItem=(props)=>{
    console.log(NotesData)
    var note=null
    if(props.route.params.type=="new"){
        note=new Note('t','t') 
        NotesData.push(note)
    }

    const [title,setTitle]=useState(props.title)
    const [text,setText]=useState(props.text)
    note.setText(text)
    note.setTitle
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.dateText}>Nov 1</Text>
            </View>
            <View style={styles.textContainer}>
            <TextInput value={title} placeholderTextColor={Colors.placeholder}  placeholder="Title..." style={styles.title}/>
            <TextInput value={text} placeholderTextColor={Colors.placeholder} placeholder="Text..." style={styles.text}/>
            </View>
        </View>
    )
}

export default NoteItem;

const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.background,
        flexGrow:1,
        padding:20,
    },
    headerContainer:{
        height:40
    },

    title:{
        fontSize:32,
        fontWeight:"800",
        color: Colors.heading,
        
        
    },
    text:{
        fontSize:16,
        color:Colors.subtext
    },
    dateText:{
        fontSize:18,
        color:Colors.subtext
    }
})