import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
  Switch,
  Image,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import HorizontalPicker from "@vseslav/react-native-horizontal-picker";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function AddExpense({ navigation }) {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [value, setValue] = useState("Expense");
  const [items, setItems] = useState([
    { label: "Income", value: "Income" },
    { label: "Expense", value: "Expense" },
  ]);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([
    {
      label: "Shopping",
      value: "Shopping",
      icon: () => (
        <Image
          source={require("../assets/images/Shopping.png")}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "Subscription",
      value: "Subscription",
      icon: () => (
        <Image
          source={require("../assets/images/subscription.png")}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "Food",
      value: "Food",
      icon: () => (
        <Image
          source={require("../assets/images/Food.png")}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "Traveling",
      value: "Traveling",
      icon: () => (
        <Image
          source={require("../assets/images/transportation.png")}
          style={styles.iconStyle}
        />
      ),
    },
    { label: "Entertainment", value: "Entertainment" },
    { label: "Medical", value: "Medical" },
    { label: "Personal Care", value: "Personal Care" },
    { label: "Education", value: "Education" },
    { label: "Bills", value: "Bills" },
    { label: "Investments", value: "Investments" },
    { label: "Rent", value: "Rent" },
    { label: "Taxes", value: "Taxes" },
    { label: "Insurance", value: "Insurance" },
    { label: "Others", value: "Others" },
  ]);

  const [type, setType] = useState(null);
  const [types, setTypes] = useState([
    { label: "Cash", value: "Cash" },
    { label: "Bank", value: "Bank" },
  ]);

  // toggleSwitch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // toggleSwitch

  // image picker

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }

    // different code
    // let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // if (permissionResult.granted === false) {
    //   alert("Permission to access camera roll is required!");
    //   return;
    // }

    // let pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult);
    // different code

    // camera code
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
    // camera code
  };

  // image picker

  const onAdded = () => {
    navigation.navigate("Home");
  };

  const dropDownBgColor = () => {
    let color;
    if (value === "Income") {
      open ? (color = "#022E1E") : (color = "#00A86B");
    } else {
      open ? (color = "#4B0409") : (color = "#FD3C4A");
    }
    return color;
  };

  return (
    <View
      style={[
        styles.backgroundView,
        { backgroundColor: value === "Income" ? "#00A86B" : "#FD3C4A" },
      ]}
    >
      <View style={styles.topBar}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{
            backgroundColor: "transparent",
            width: width / 3.2,
            color: "white",
            borderWidth: 0,
          }}
          textStyle={{
            color: "white",
            fontWeight: "600",
            fontSize: 18,
          }}
          containerStyle={{
            backgroundColor: dropDownBgColor(),
            borderWidth: 0,
            borderRadius: 10,
            color: "black",
            width: width / 3.2,
          }}
          dropDownContainerStyle={{
            backgroundColor: value === "Income" ? "#022E1E" : "#4B0409",
            backfaceVisibility: "visible",
            borderWidth: 0,
            borderRadius: 10,
          }}
          arrowIconStyle={{
            width: 20,
            height: 20,
            color: "white",
          }}
          showTickIcon={false}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: height / 3.86,
          paddingLeft: width / 14.42,
        }}
      >
        <Text
          style={{
            color: "#FCFCFC",
            fontSize: 18,
            fontWeight: "600",
            opacity: 0.64,
          }}
        >
          How much ?
        </Text>
        <TextInput
          inputmode="decimal"
          style={styles.balanceInput}
          placeholder="$00.00"
          keyboardType={"numeric"}
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.inputView}>
        <View style={{ zIndex: 100 }}>
          <DropDownPicker
            zIndex={100}
            open={categoryOpen}
            setOpen={setCategoryOpen}
            value={category}
            items={categories}
            setValue={setCategory}
            setItems={setCategories}
            autoScroll={true}
            listMode="SCROLLVIEW"
            theme="DARK"
            style={{
              backgroundColor: "white",
              width: width / 1.09,
              color: "black",
              borderColor: "#F1F1FA",
              borderRadius: 16,
              height: height / 14.5,
            }}
            textStyle={{
              color: "#91919F",
              fontWeight: "400",
              fontSize: 18,
            }}
            containerStyle={{
              backgroundColor: "white",
              color: "black",
              width: width / 1.09,
              borderColor: "#F1F1FA",
            }}
            dropDownContainerStyle={{
              backgroundColor: "white",
              borderColor: "#F1F1FA",
            }}
            arrowIconStyle={{
              width: 20,
              height: 20,
              color: "white",
            }}
            showTickIcon={false}
            placeholder="Category"
          />
        </View>
        <TextInput style={styles.loginInput} placeholder="Description" />

        <View style={{ zIndex: 1 }}>
          <DropDownPicker
            zIndex={1}
            open={typeOpen}
            setOpen={setTypeOpen}
            value={type}
            items={types}
            setValue={setType}
            setItems={setTypes}
            style={{
              backgroundColor: "white",
              width: width / 1.09,
              color: "black",
              borderColor: "#F1F1FA",
              borderRadius: 16,
              height: height / 14.5,
            }}
            textStyle={{
              color: "#91919F",
              fontWeight: "400",
              fontSize: 18,
            }}
            containerStyle={{
              backgroundColor: "white",
              color: "black",
              width: width / 1.09,
              borderColor: "#F1F1FA",
            }}
            dropDownContainerStyle={{
              backgroundColor: "white",
              borderColor: "#F1F1FA",
            }}
            arrowIconStyle={{
              width: 20,
              height: 20,
              color: "white",
            }}
            showTickIcon={false}
            placeholder="Payment Mode"
          />
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadImage}>
          <Text
            style={{
              color: "#91919F",
              fontSize: 18,
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            <FontAwesome name="paperclip" size={24} color="#91919F" /> Add
            Attachment
          </Text>
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: width / 23.43,
            paddingTop: height / 100,
          }}
        >
          <View>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>
              Repeat
            </Text>
            <Text style={{ fontSize: 13, fontWeight: "500", color: "#91919F" }}>
              Repeat Transaction
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#EEE5FF", true: "#7F3DFF" }}
            thumbColor={isEnabled ? "#FCFCFC" : "#FCFCFC"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onAdded}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    height: height,
    width: width,
  },
  topBar: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    top: height / 13.533,
  },
  inputView: {
    height: height / 1.57,
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    top: height / 2.75,
    paddingTop: height / 33.833,
    paddingLeft: width / 23.43,
  },
  loginInput: {
    borderColor: "#F1F1FA",
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 18,
    height: height / 14.5,
    width: width / 1.09,
    marginTop: height / 50.75,
    fontWeight: "400",
    paddingLeft: width / 40,
    color: "#91919F",
    marginBottom: height / 50.75,
  },
  uploadImage: {
    borderColor: "#D8D8DA",
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 18,
    height: height / 14.5,
    width: width / 1.09,
    marginTop: height / 50.75,
    fontWeight: "400",
    paddingLeft: width / 40,
    color: "#91919F",
    marginBottom: height / 50.75,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: height / 80,
    borderStyle: "dashed",
  },
  loginButton: {
    width: width / 1.09,
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    paddingLeft: width / 23.43,
    height: height / 14.5,
    fontSize: 18,
    justifyContent: "center",
    marginTop: height / 50.75,
  },
  balanceInput: {
    fontSize: 64,
    color: "#FCFCFC",
    fontWeight: "600",
    lineHeight: 77,
  },
  iconStyle: {
    height: height / 23.2,
    width: width / 10.71,
  },
});
