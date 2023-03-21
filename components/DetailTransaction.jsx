import React from 'react';
import { ScrollView,View, Text, StyleSheet, Dimensions,Alert } from 'react-native';
import { Appbar,Divider } from 'react-native-paper';


const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default DetailTransaction = ({ navigation: { goBack }, route }) => {

    // title = route.params.title;
    // type = route.params.type;
    // datetime = route.params.datetime;
    // amount = route.params.amount;
    // note = route.params.note;
    let type = "Expense"


    return (
        <ScrollView>
            <View style={[styles.colorView, { backgroundColor: type === "Expense" ? "#FD3C4A" : "#00A86B", justifyContent: "center" }]}>
                <Appbar.Header mode="center-aligned" statusBarHeight={0} style={{backgroundColor:"transparent",color:"white"}}>
                    <Appbar.BackAction style={{top: -(height/40.6)}} color="white" onPress={() => goBack()} />
                    <Appbar.Content title="Transaction Details" color="white" titleStyle={{fontSize:18,margin:0,padding:0,top:-(height/40.6)}} />
                    <Appbar.Action style={{top: -(height/40.6)}} icon="delete" color="white" onPress={() => Alert.alert("Transaction Deleted")} />
                </Appbar.Header>
                <Text style={{ fontSize: 48, fontWeight: '700', color: "#fcfcfc", textAlign: 'center' }}>$5000</Text>
                <Text style={{ textAlign: "center", fontSize: 16, color: "white" ,top:height/162}}>Buy Some Grocery</Text>
                <Text style={{ textAlign: "center", fontSize: 13, color: "white",top:height/62 }}>Saturday 4 June 2021 16:20</Text>
            </View>
            <View style={styles.containerOverlay}>
                <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", paddingTop: height / 67.666 }}>
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "#91919F" }}>Type</Text>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>{type}</Text>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", paddingTop: height / 67.666 }}>
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "#91919F" }}>Category</Text>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Shopping</Text>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", paddingTop: height / 67.666 }}>
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "#91919F" }}>Payment</Text>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Wallet</Text>
                    </View>
                </View>
            </View>
            <Divider bold={true} style={{margin:16,top:height/20}}  />
            <Text style={{color:"#91919F",fontSize:16,fontWeight:'600',left: width - (width / 1.09329)}}>Description</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae voluptatibus quos, adipisci praesentium ea qui, natus asperiores earum explicabo quisquam quod impedit illo aliquam commodi reiciendis doloribus officiis nihil odio ducimus aut dolorum numquam at. Nesciunt quis vitae sint.</Text>
        </ScrollView>
    )
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
    }
})