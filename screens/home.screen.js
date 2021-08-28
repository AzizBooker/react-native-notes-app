import { bold, white } from "ansi-colors";
import React from "react";
import ListItem from "../component/ListItem";

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedbackBase,
  Button,
} from "react-native";
import NotesData from "../data/DummyData.data";
import Colors from "../theme/colors.theme";

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Add"
        onPress={() => {
          navigation.navigate("Note",{
            type:'new',
            id:""
          });
        }}
      />
    ),
  });


  
  const renderItem = (itemData) => {
    return <ListItem itemData={itemData} />;
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
      showsVerticalScrollIndicator={false}
        data={NotesData}
        renderItem={renderItem}
        keyExtractor={(itemData) => itemData.id}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    //marginTop:StatusBar.currentHeight,
    backgroundColor: Colors.background,
    flexGrow:1,
    alignItems: "center",
    justifyContent: "center",
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    color: Colors.heading,
    fontSize: 24,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 20,
  },
});
