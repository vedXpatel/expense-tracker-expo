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
    ScrollView,
    Alert,
} from "react-native";
import Navbar from "./NavBar";
import DropDownPicker from "react-native-dropdown-picker";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default CreateBudget = ({ navigation, route }) => {
    // toggleSwitch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    // toggleSwitch

    const [category, setCategory] = useState(null);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [categories, setCategories] = useState([
        {
            label: "Shopping",
            value: "Shopping",
        },
        {
            label: "Subscription",
            value: "Subscription",
        },
        {
            label: "Food",
            value: "Food",
        },
        {
            label: "Traveling",
            value: "Traveling",
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

    let month = route.params.month;

    return (
        <View>
            <View>
                <View style={styles.backgroundView}>
                    <View></View>
                    <Text style={styles.loginText}>Add New Account</Text>
                    <Text
                        style={{
                            top: height / 2.6,
                            marginLeft: 20,
                            fontSize: 18,
                            color: "#FCFCFC",
                        }}
                    >
                        How much do you want to spend?
                    </Text>
                    <TextInput
                        inputmode="decimal"
                        style={styles.balanceInput}
                        placeholder="$00.00"
                        keyboardType={"numeric"}
                        placeholderTextColor="white"
                    />
                </View>
                <View style={styles.newAccountView}>
                    {/* <TextInput style={styles.loginInput} placeholder="Name" /> */}
                    {/* <TextInput style={styles.accountTypeInput} placeholder="AccountType" /> */}

                    <View
                        style={{
                            justifyContent: "space-evenly",
                            flexDirection: "row",
                            top: height / 30,
                        }}
                    >
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
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: width / 23.43,
                            top: height / 15,
                        }}
                    >
                        <View>
                            <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>
                                Receive Alert
                            </Text>
                            <Text
                                style={{ fontSize: 13, fontWeight: "500", color: "#91919F" }}
                            >
                                Receive alert when it reaches some point.
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
                    {
                        isEnabled && (
                            <View >
                                <Text>Something</Text>
                            </View>
                        ) 
                    }

                    {/* <TouchableOpacity
                        style={styles.loginButton}
                    >
                        <Text
                            style={{ color: "white", fontSize: 18, textAlign: "center" }}
                        >
                            Continue
                        </Text>
                    </TouchableOpacity> */}
                </View>
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
    },
    newAccountView: {
        height: height / 2,
        width: width,
        zIndex: 3,
        position: "absolute",
        backgroundColor: "white",
        top: height / 1.8,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    accountTypeView: {},
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
        top: Platform.OS === "android" ? height / 20 : -(height / 12),
    },
    balanceInput: {
        fontSize: 64,
        color: "white",
        top: Platform.OS === "ios" ? height / 2.5 : height / 2.6,
        marginLeft: 20,
    },
});
