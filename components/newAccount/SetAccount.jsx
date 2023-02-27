import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SetAccount = ({ navigation }) => {

  const [selectedLanguage, setSelectedLanguage] = useState();


  return (
    <View>
      <View style={styles.backgroundView}>
        <View>
          
        </View>
        <Text style={styles.loginText}>
          Add New Account
        </Text>

      </View>
      <View style={styles.newAccountView}>
        <TextInput style={styles.loginInput} placeholder="Name" />
        {/* <TextInput style={styles.accountTypeInput} placeholder="AccountType" /> */}
        <Picker 
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    </View>
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
    fontFamily: "Poppins-Regular",
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
    fontFamily:"Poppins-Regular",
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
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  accountTypeInput: {
    borderColor: "#E0E0E0",
    borderWidth: 1,
    top: 24,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 16,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    marginTop:15,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default SetAccount;