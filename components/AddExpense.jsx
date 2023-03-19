import React,{useState} from 'react'
import { View,Text,StyleSheet,Dimensions, SafeAreaView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function AddExpense() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);


  return (

    <View style={styles.backgroundView}>
        <Text>expense view</Text>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
        <View style={styles.inputView}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundView:{
        height:height,
        width:width,
        backgroundColor:"#FD3C4A",
        padding:20,
    },
    inputView:{
        height:height/1.57,
        backgroundColor:"white",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        top:height/2.75,
    }
})
