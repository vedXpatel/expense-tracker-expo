import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SetAccount = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView>
      
    <View>
      <View style={styles.backgroundView}>
        <View></View>
        <Text style={styles.loginText}>Add New Account</Text>
        <Text style={{top:height/2.05,marginLeft:20,fontSize:18,color: "#FCFCFC"}}>Balance</Text>
      <TextInput inputmode="decimal"  style={styles.balanceInput} placeholder="$00.00" keyboardType={'numeric'} placeholderTextColor = "white"/>
      </View>
      <View style={styles.newAccountView}>
        <TextInput style={styles.loginInput} placeholder="Name" />
        {/* <TextInput style={styles.accountTypeInput} placeholder="AccountType" /> */}
        <Text style={{fontSize: 15,color:"#C4C4C4",marginLeft:30,marginTop:height/20,marginBottom:-(height/20),}}>Account Type</Text>
        <Picker
          style={styles.accountTypeInput}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Cash" value="cash" />
          <Picker.Item label="Bank" value="bank" />
        </Picker>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SetAccount')}>
                <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
                    Continue
                </Text>
            </TouchableOpacity>
      </View>
    </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "#7F3DFF",
    height: height,
    width: width,
  },
  loginText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    top: height / 10,
  },
  newAccountView: {
    height: height / 3,
    width: width,
    zIndex: 3,
    position: "absolute",
    backgroundColor: "white",
    top: height / 1.5,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  accountTypeView: {
  },
  loginInput: {
    borderColor: "#E0E0E0",
    borderWidth: 1,
    top: 24,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 16,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  accountTypeInput: {
    borderColor: "#E0E0E0",
    borderWidth: Platform.OS === "android" ? 1 : 0,
    top: Platform.OS === "android" ? 24 : -10,
    marginLeft: Platform.OS === "android" ? 20 : 0,
    marginRight: Platform.OS === "android" ? 20 : 0,
    borderRadius: Platform.OS === "android" ? 16 : 0,
    paddingLeft: Platform.OS === "android" ? 10 : 0,
    paddingRight: Platform.OS === "android" ? 10 : 0,
    fontSize: Platform.OS === "android" ? 15 : 0,
    marginTop: Platform.OS === "android" ? 15 : 0,
    paddingTop: Platform.OS === "android" ? 15 : 0,
    paddingBottom: Platform.OS === "android" ? 15 : 0,
  },
  loginButton: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 15,
    top: Platform.OS === "android" ? height/20 : -(height/12),
},
balanceInput:{
  fontSize:64,
  color:"white",
  top: Platform.OS === "ios" ? height/2 : height/2.1,
  marginLeft:20,
}
});

export default SetAccount;
