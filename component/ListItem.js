import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedbackBase,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Colors from "../theme/colors.theme";
const ListItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      
        <Text style={styles.itemDate}>
          {props.itemData.item.dateLastEdited}
        </Text>
        <Text style={styles.itemHeading}>{props.itemData.item.title}</Text>
        <Text style={styles.itemText}>{props.itemData.item.text}</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    marginVertical: 10,
    borderRadius: 10,
    borderRadius: 10,
    padding: 10,
    width: 300,
    backgroundColor: Colors.primary,
  },
  itemHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.heading,
  },
  itemText: {
    fontSize: 12,
    color: Colors.subtext,
  },
  itemDate: {
    fontSize: 9,
    color: Colors.subtext,
  },
});

export default ListItem;
