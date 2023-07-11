import React from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions, Alert, Image, TouchableOpacity} from 'react-native';
import {Appbar, Divider} from 'react-native-paper';


const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


const DetailTransaction = ({navigation: {goBack}, route}) => {

    const title = route.params.title;
    const type = route.params.type;
    const datetime = route.params.datetime;
    const amount = route.params.amount;
    const note = route.params.note;


    return <ScrollView>
        <View style={[styles.colorView, {
            backgroundColor: type === "Expense" ? "#FD3C4A" : "#00A86B",
            justifyContent: "center"
        }]}>
            <Appbar.Header mode="center-aligned" statusBarHeight={0}
                           style={{backgroundColor: "transparent", color: "white"}}>
                <Appbar.BackAction style={{top: -(height / 40.6)}} color="white" onPress={() => goBack()}/>
                <Appbar.Content title="Transaction Details" color="white"
                                titleStyle={{fontSize: 18, margin: 0, padding: 0, top: -(height / 40.6)}}/>
                <Appbar.Action style={{top: -(height / 40.6)}} icon="delete" color="white"
                               onPress={() => Alert.alert("Transaction Deleted")}/>
            </Appbar.Header>
            <Text style={{fontSize: 48, fontWeight: '700', color: "#fcfcfc", textAlign: 'center'}}>${amount}</Text>
            <Text style={{textAlign: "center", fontSize: 16, color: "white", top: height / 162}}>{note}</Text>
            <Text style={{textAlign: "center", fontSize: 13, color: "white", top: height / 62}}>{datetime}</Text>
        </View>
        <View style={styles.containerOverlay}>
            <View style={{justifyContent: "space-around", flexDirection: "row"}}>
                <View style={{
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    paddingTop: height / 67.666
                }}>
                    <Text style={{fontSize: 14, fontWeight: "500", color: "#91919F"}}>Type</Text>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>{type}</Text>
                </View>
                <View style={{
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    paddingTop: height / 67.666
                }}>
                    <Text style={{fontSize: 14, fontWeight: "500", color: "#91919F"}}>Category</Text>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>{title} </Text>
                </View>
                <View style={{
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    paddingTop: height / 67.666
                }}>
                    <Text style={{fontSize: 14, fontWeight: "500", color: "#91919F"}}>Payment</Text>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>Wallet</Text>
                </View>
            </View>
        </View>
        <Divider bold={true} style={{margin: 16, top: height / 20}}/>
        <Text style={{
            color: "#91919F",
            fontSize: 16,
            fontWeight: '600',
            left: width - width / 1.05329,
            marginRight: width - width / 1.05329,
            top: height / 20
        }}>Description</Text>
        <Text style={{
            top: height / 20,
            fontSize: 16,
            fontWeight: "500",
            left: width - width / 1.05329,
            paddingRight: width - width / 1.09329,
            marginTop: height / 74.1333
        }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est quos dolorum nisi beatae a ullam sed
            dolor sunt, ipsum alias aliquid reprehenderit tempore autem ipsam modi expedita eligendi cum hic. Magnam
            odit quibusdam sit recusandae velit, maiores sunt praesentium? </Text>
        <Text style={{
            color: "#91919F",
            fontSize: 16,
            fontWeight: '600',
            left: width - width / 1.05329,
            marginRight: width - width / 1.05329,
            top: height / 20,
            marginTop: height / 74.133
        }}>Attachment</Text>
        <Image source={require("../assets/images/tempBill.png")}
               style={{marginHorizontal: width / 23.4375, top: height / 20, marginTop: height / 74.1333}}/>
        <View style={{flexDirection: "row", justifyContent: "space-evenly", top: height / 20, height: 200}}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={{color: "white", fontSize: 18, textAlign: "center"}}>
                    Edit
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    colorView: {
        height: height / 2.87,
        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 32,
    },
    containerOverlay: {
        width: width / 1.09329,
        height: height / 11.6,
        borderWidth: 1,
        borderRadius: 12,
        position: "absolute",
        borderColor: "#F1F1FA",
        top: height / 3.222,
        alignSelf: "center",
        backgroundColor: "white",
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
})

export default DetailTransaction;