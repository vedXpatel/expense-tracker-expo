import React from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import Svg, { Circle, Rect,Path } from 'react-native-svg';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function Home() {
  return (
    <ScrollView>
      <View style={styles.backgroundView}>
        <Text style={styles.loginText}>Account Balance</Text>
        <Text style={styles.accountBalance}>$9400</Text>
      <View style={styles.incomeView}>
          <View style={styles.incomeBox}>
            <View>
            <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect width="48" height="48" rx="16" fill="#FCFCFC"/>
<Path d="M31 22H17C15.6739 22 14.4021 22.5268 13.4645 23.4645C12.5268 24.4021 12 25.6739 12 27V33C12 34.3261 12.5268 35.5979 13.4645 36.5355C14.4021 37.4732 15.6739 38 17 38H31C32.3261 38 33.5979 37.4732 34.5355 36.5355C35.4732 35.5979 36 34.3261 36 33V27C36 25.6739 35.4732 24.4021 34.5355 23.4645C33.5979 22.5268 32.3261 22 31 22V22ZM24 34C23.2089 34 22.4355 33.7654 21.7777 33.3259C21.1199 32.8864 20.6072 32.2616 20.3045 31.5307C20.0017 30.7998 19.9225 29.9956 20.0769 29.2196C20.2312 28.4437 20.6122 27.731 21.1716 27.1716C21.731 26.6122 22.4437 26.2312 23.2196 26.0769C23.9956 25.9225 24.7998 26.0017 25.5307 26.3045C26.2616 26.6072 26.8864 27.1199 27.3259 27.7777C27.7654 28.4355 28 29.2089 28 30C28 31.0609 27.5786 32.0783 26.8284 32.8284C26.0783 33.5786 25.0609 34 24 34Z" fill="#00A86B"/>
<Path d="M24 32C25.1046 32 26 31.1046 26 30C26 28.8954 25.1046 28 24 28C22.8954 28 22 28.8954 22 30C22 31.1046 22.8954 32 24 32Z" fill="#00A86B"/>
<Path d="M24 10C23.7348 10 23.4805 10.1054 23.2929 10.2929C23.1054 10.4804 23 10.7348 23 11V16.59L20.46 14.05C20.2687 13.8862 20.0227 13.8006 19.771 13.8103C19.5193 13.82 19.2806 13.9243 19.1025 14.1024C18.9244 14.2805 18.82 14.5193 18.8103 14.7709C18.8006 15.0226 18.8862 15.2687 19.05 15.46L23.29 19.71C23.3822 19.8 23.4908 19.8713 23.61 19.92C23.7334 19.9723 23.866 19.9992 24 19.9992C24.134 19.9992 24.2666 19.9723 24.39 19.92C24.5092 19.8713 24.6179 19.8 24.71 19.71L29 15.46C29.1639 15.2687 29.2495 15.0226 29.2397 14.7709C29.23 14.5193 29.1257 14.2805 28.9476 14.1024C28.7695 13.9243 28.5308 13.82 28.2791 13.8103C28.0274 13.8006 27.7813 13.8862 27.59 14.05L25 16.59V11C25 10.7348 24.8947 10.4804 24.7071 10.2929C24.5196 10.1054 24.2652 10 24 10V10Z" fill="#00A86B"/>
</Svg>

            </View>
              <View>
                  <View><Text>Income</Text></View>
                  <View><Text>$5000</Text></View>
              </View>
          </View>
          <View style={styles.expenseBox}>

          </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginText: {
    textAlign: "center",
    fontSize: 14,
    color: "#91919F",
    top: height / 7.5,
  },
  backgroundView: {
    height: height,
    width: width,
  },
  accountBalance: {
    top: height / 6.5,
    fontSize: 40,
    textAlign: "center",
  },
  incomeView:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    top:height/5,
  },
  incomeBox:{
    width:( width/2.28) > 80 ? (width/2.28) : 80,
    backgroundColor:"#00A86B",
    height:height/10.15,
    borderRadius:28,
    margin:10,
    flex:1,
    flexDirection:"row",
    padding:15,
  },
  expenseBox:{
    width:( width/2.28) > 80 ? (width/2.28) : 80,
    backgroundColor:"#FD3C4A",
    height:height/10.15,
    borderRadius:28,
    margin:10,
  }
});

export default Home;
