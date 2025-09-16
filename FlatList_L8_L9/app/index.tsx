import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import ListItemSseparator from "@/components/ListItemSeperator";
import { DATA, dataType } from "@/data/appData";
import ListItem from "@/components/ListItem";

export default function Index() {


  //create a simple function telling me what was selected 
  const selectedList = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id)
  }

  const [selectedId, setSelectedId] = useState<string>("1")
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data ={DATA}
            extraData={selectedId}
            keyExtractor ={(item: dataType) => item.id}
            ItemSeparatorComponent={() => (
              <ListItemSseparator color={"red"}/>)}
              
            renderItem={({ item}) => (
              <ListItem 
                item={item}
                isSelected ={item.id === selectedId}
                onPress={selectedList}  
              />
            )
            } 

          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  flatListRow:{
    backgroundColor: 'olive',
    color: 'white',
    borderWidth: 3,
    borderStyle: 'dotted',
    padding: 5,
    margin: 3,
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
