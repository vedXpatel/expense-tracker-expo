import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const [value, setValue] = useState("Income");

export default function AddExpense() {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: "Income", value: "Income" },
        { label: "Expense", value: "Expense" },
        { label: "Transfer", value: "Transfer" },
    ]);

    return (
        <View style={styles.backgroundView}>
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
                        width: width / 3,
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
                        width: width / 3,
                    }}
                    labelStyle={{
                        backgroundColor: "transparent",
                        width: width / 3,
                        borderWidth: 0,
                    }}
                    dropDownContainerStyle={{
                        backgroundColor: "transparent",
                        borderWidth: 0,

                    }}
                    customItemContainerStyle={{
                        borderBottomWidth: 1,
                        borderColor: "white",

                    }}
                />
            </View>
            <View style={styles.inputView}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundView: {
        height: height,
        width: width,
        // backgroundColor: value === "Income" ? "#FD3C4A" : "#00A86B",
    },
    topBar: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingTop: 100,
    },
    inputView: {
        height: height / 1.57,
        backgroundColor: "white",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        top: height / 2.75,
    },
});
