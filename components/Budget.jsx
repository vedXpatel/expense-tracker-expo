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
import { Picker } from "@react-native-picker/picker";


const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Items = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const Budget = ({navigation}) => {

    const [month, setMonth] = useState();

    return (
        <View>
            <View style={{ height: height, width: width, backgroundColor: "#7F3DFF", }}>
                <Picker
                    style={styles.accountTypeInput}
                    selectedValue={month}
                    onValueChange={(itemValue, itemIndex) =>
                        setMonth(itemValue)
                    }
                    itemStyle={{color:"#FCFCFC",fontSize:24,fontWeight:"500"}}
                >
                    {
                        Items.map((item) => {
                            return (
                                <Picker.Item color="#FCFCFC" style={{color:"#FCFCFC",fontSize:24,fontWeight:"500",backgroundColor:"#7F3DFF"}}  label={item} value={item} />
                            )
                        })
                    }
                </Picker>
            </View>
            <View style={styles.overlay}>
                <Text style={{ textAlign: "center", color: "#91919F", fontSize: 16, fontWeight: "500", marginHorizontal: width / 10 }}>You don’t have a budget. Let’s make one so you in control.</Text>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={()=>navigation.navigate("CreateBudget",{month:month})}

                >
                    <Text
                        style={{ color: "white", fontSize: 18, textAlign: "center" }}
                    >
                        Create Budget
                    </Text>
                </TouchableOpacity>
            </View>
            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "white",
        height: height / 1.2210,
        width: width,
        top: height / 5.5238,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        position: "absolute"
    },
    accountTypeInput: {
        borderColor: "black",
        borderWidth: Platform.OS === "android" ? 1 : 1,
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
        top:height/5,
    }
})

export default Budget;