import { bold, white } from "ansi-colors";
import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import NotesData from "../data/DummyData.data";
import Colors from "../theme/colors.theme";

const HomeScreen = (props) => {
  const renderItem = (itemData) => {
    console.log(itemData.item)
    console.log(itemData.item.dateLastEdited)
    return(
    <View style={styles.itemContainer}>
      
      <Text style={styles.itemDate}>{itemData.item.dateLastEdited}</Text>
      <Text style={styles.itemHeading}>{itemData.item.title}</Text>
      <Text style={styles.itemText}>{itemData.item.text}</Text>
    </View>
    )
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Text>Notes</Text>
      <FlatList
        data={NotesData}
        renderItem={renderItem}
        keyExtractor={(itemData) => itemData.id}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    display: "flex",
    marginVertical:10,
    padding:10,
    width:300,
    backgroundColor:Colors.primary
  },
  itemHeading:{
    fontSize:16,
    color:"#fff",

  },
  itemText:{
    fontSize:12
  },
  itemDate:{
    fontSize:10
  }
});
