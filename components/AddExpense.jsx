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
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from '@expo/vector-icons';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function AddExpense() {
    const [open, setOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const [value, setValue] = useState("Income");
    const [items, setItems] = useState([
        { label: "Income", value: "Income" },
        { label: "Expense", value: "Expense" },
    ]);
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState([
        { label: "Shopping", value: "Shopping" },
        { label: "Subscription", value: "Subscription" },
        { label: "Food", value: "Food" },
        { label: "Traveling", value: "Traveling" },
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
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // toggleSwitch


    // image picker

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // image picker

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
                        fontSize: 15,
                        color: "white",
                        fontWeight: "600",
                        fontSize: 18,
                    }}
                    containerStyle={{
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        color: "black",
                        width: width / 3.2,
                    }}
                    dropDownContainerStyle={{
                        backgroundColor: "transparent",
                        borderWidth: 0,
                    }}
                    arrowIconStyle={{
                        width: 20,
                        height: 20,
                        color: "white",
                    }}
                    showTickIcon={false}
                />
            </View>
            <View style={styles.inputView}>
                <DropDownPicker
                    zIndex={100}
                    open={categoryOpen}
                    setOpen={setCategoryOpen}
                    value={category}
                    items={categories}
                    setValue={setCategory}
                    setItems={setCategories}
                    style={{
                        backgroundColor: "white",
                        width: width / 1.09,
                        color: "black",
                        borderColor: "#F1F1FA",
                        borderRadius: 16,
                        height: height / 14.5,
                    }}
                    textStyle={{
                        fontSize: 15,
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
                <TextInput style={styles.loginInput} placeholder="Description" />

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
                        fontSize: 15,
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
                <TouchableOpacity onPress={pickImage} style={styles.uploadImage}>
                    <Text style={{ color: "#91919F", fontSize: 18, fontWeight: "400", textAlign: "center" }}>
                        <FontAwesome name="paperclip" size={24} color="#91919F" />     Add Attachment</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: width / 23.43, paddingTop: height / 100 }}>
                    <View>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Repeat</Text>
                        <Text style={{ fontSize: 13, fontWeight: '500', color: "#91919F" }}>Repeat Transaction</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#EEE5FF', true: '#7F3DFF' }}
                        thumbColor={isEnabled ? '#FCFCFC' : '#FCFCFC'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginButton}
                >
                    <Text
                        style={{ color: "white", fontSize: 18, textAlign: "center" }}
                    >
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
        borderStyle: 'dashed',
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
});
