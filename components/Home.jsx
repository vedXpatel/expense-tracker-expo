import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Svg, {
  Circle,
  Rect,
  Path,
  Defs,
  Stop,
  LinearGradient,
} from "react-native-svg";
// import BottomTab from "./BottomTab";
// import TabBar from "fluidbottomnavigation-rn";
import Navbar from "./NavBar";
import { Avatar } from '@rneui/themed';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const tabs = [
  {
    title: "Today",
    id: 1,
    serial: 1,
  },
  {
    title: "Week",
    id: 2,
    serial: 2,
  },
  {
    title: "Month",
    id: 3,
    serial: 3,
  },
  {
    title: "Year",
    id: 4,
    serial: 4,
  },
];

const recentTransactions = [
  {
    title: "Shopping",
    type: "expense",
    amount: "150",
    note: "lorem ipsum",
    datetime: "10:00 AM",
    id: 1,
  },
  {
    title: "Shopping",
    type: "expense",
    amount: "150",
    note: "lorem ipsum",
    datetime: "10:00 AM",
    id: 2,
  },
  {
    title: "Shopping",
    type: "expense",
    amount: "150",
    note: "lorem ipsum",
    datetime: "10:00 AM",
    id: 3,
  },
  {
    title: "Lottery",
    type: "income",
    amount: "150",
    note: "won a million dollar lottery",
    datetime: "10:00 AM",
    id: 4,
  },
];

const TransactionItem = ({ title, type, note, datetime, amount }) => (
  <TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
      }}
    >
      <Image style={{ marginLeft: 20 }} source={require("../assets/images/Shopping.png")} />
      <View style={{ flexDirection: "column", justifyContent: "space-evenly" }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{title}</Text>
        <Text style={{ fontSize: 13, color: "#91919F" }}>{(note.length > 15) ? note.substring(0, 12) + "..." : note} </Text>
      </View>
      <View style={{ width: width / 6.14 }}></View>
      <View style={{ flexDirection: "column", justifyContent: "space-evenly" }}>
        <Text style={type === "expense" ? styles.negative : styles.positive}>{type === "expense" ? "-" : "+"}${amount}</Text>
        <Text style={{ fontSize: 13, color: "#91919F" }}>{datetime}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

function Home() {
  const [selected, setSelected] = useState(1);

  const Item = ({ title, serial }) => (
    <View style={styles.tabView}>
      <TouchableOpacity
        style={
          selected === serial ? styles.tabButton : styles.tabButtonUnselected
        }
        onPress={() => setSelected(serial)}
      >
        {selected === serial ? (
          <Text style={styles.selectedText}>{title}</Text>
        ) : (
          <Text style={styles.unselectedText}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <ScrollView>
        <View style={{ height: height * 1.5 }}>
          <View style={{position:"absolute",justifyContent:"space-between",top:height/13.5333,marginHorizontal:width/23.4375,flexDirection="row"}}>
            <TouchableOpacity style={{borderWidth:1,borderRadius:24,borderColor:"#7F3DFF",padding:1}}>
            <Avatar
              size={32}
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            </TouchableOpacity>
            <Image source={require("../assets/images/notification.png")}  />
          </View>
          <Text style={styles.loginText}>Account Balance</Text>
          <Text style={styles.accountBalance}>$9400</Text>
          <View style={styles.incomeView}>
            <View style={styles.incomeBox}>
              <View>
                <Svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Rect width="48" height="48" rx="16" fill="#FCFCFC" />
                  <Path
                    d="M31 22H17C15.6739 22 14.4021 22.5268 13.4645 23.4645C12.5268 24.4021 12 25.6739 12 27V33C12 34.3261 12.5268 35.5979 13.4645 36.5355C14.4021 37.4732 15.6739 38 17 38H31C32.3261 38 33.5979 37.4732 34.5355 36.5355C35.4732 35.5979 36 34.3261 36 33V27C36 25.6739 35.4732 24.4021 34.5355 23.4645C33.5979 22.5268 32.3261 22 31 22V22ZM24 34C23.2089 34 22.4355 33.7654 21.7777 33.3259C21.1199 32.8864 20.6072 32.2616 20.3045 31.5307C20.0017 30.7998 19.9225 29.9956 20.0769 29.2196C20.2312 28.4437 20.6122 27.731 21.1716 27.1716C21.731 26.6122 22.4437 26.2312 23.2196 26.0769C23.9956 25.9225 24.7998 26.0017 25.5307 26.3045C26.2616 26.6072 26.8864 27.1199 27.3259 27.7777C27.7654 28.4355 28 29.2089 28 30C28 31.0609 27.5786 32.0783 26.8284 32.8284C26.0783 33.5786 25.0609 34 24 34Z"
                    fill="#00A86B"
                  />
                  <Path
                    d="M24 32C25.1046 32 26 31.1046 26 30C26 28.8954 25.1046 28 24 28C22.8954 28 22 28.8954 22 30C22 31.1046 22.8954 32 24 32Z"
                    fill="#00A86B"
                  />
                  <Path
                    d="M24 10C23.7348 10 23.4805 10.1054 23.2929 10.2929C23.1054 10.4804 23 10.7348 23 11V16.59L20.46 14.05C20.2687 13.8862 20.0227 13.8006 19.771 13.8103C19.5193 13.82 19.2806 13.9243 19.1025 14.1024C18.9244 14.2805 18.82 14.5193 18.8103 14.7709C18.8006 15.0226 18.8862 15.2687 19.05 15.46L23.29 19.71C23.3822 19.8 23.4908 19.8713 23.61 19.92C23.7334 19.9723 23.866 19.9992 24 19.9992C24.134 19.9992 24.2666 19.9723 24.39 19.92C24.5092 19.8713 24.6179 19.8 24.71 19.71L29 15.46C29.1639 15.2687 29.2495 15.0226 29.2397 14.7709C29.23 14.5193 29.1257 14.2805 28.9476 14.1024C28.7695 13.9243 28.5308 13.82 28.2791 13.8103C28.0274 13.8006 27.7813 13.8862 27.59 14.05L25 16.59V11C25 10.7348 24.8947 10.4804 24.7071 10.2929C24.5196 10.1054 24.2652 10 24 10V10Z"
                    fill="#00A86B"
                  />
                </Svg>
              </View>
              <View>
                <View>
                  <Text style={{ color: "white", fontSize: 14 }}>Income</Text>
                </View>
                <View>
                  <Text
                    style={{ color: "white", fontSize: 22, fontWeight: "600" }}
                  >
                    $5000
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.expenseBox}>
              <View>
                <Svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Rect width="48" height="48" rx="16" fill="#FCFCFC" />
                  <Path
                    d="M31.1975 22H17.1975C15.8714 22 14.5997 22.5268 13.662 23.4645C12.7243 24.4021 12.1975 25.6739 12.1975 27V33C12.1975 34.3261 12.7243 35.5979 13.662 36.5355C14.5997 37.4732 15.8714 38 17.1975 38H31.1975C32.5236 38 33.7954 37.4732 34.733 36.5355C35.6707 35.5979 36.1975 34.3261 36.1975 33V27C36.1975 25.6739 35.6707 24.4021 34.733 23.4645C33.7954 22.5268 32.5236 22 31.1975 22ZM24.1975 34C23.4064 34 22.633 33.7654 21.9752 33.3259C21.3174 32.8864 20.8047 32.2616 20.502 31.5307C20.1992 30.7998 20.12 29.9956 20.2744 29.2196C20.4287 28.4437 20.8097 27.731 21.3691 27.1716C21.9285 26.6122 22.6412 26.2312 23.4171 26.0769C24.1931 25.9225 24.9973 26.0017 25.7282 26.3045C26.4591 26.6072 27.0839 27.1199 27.5234 27.7777C27.9629 28.4355 28.1975 29.2089 28.1975 30C28.1975 31.0609 27.7761 32.0783 27.0259 32.8284C26.2758 33.5786 25.2584 34 24.1975 34Z"
                    fill="#FD3C4A"
                  />
                  <Path
                    d="M24.1975 32C25.3021 32 26.1975 31.1046 26.1975 30C26.1975 28.8954 25.3021 28 24.1975 28C23.0929 28 22.1975 28.8954 22.1975 30C22.1975 31.1046 23.0929 32 24.1975 32Z"
                    fill="#FD3C4A"
                  />
                  <Path
                    d="M24.9076 10.29C24.8146 10.1963 24.704 10.1219 24.5822 10.0711C24.4603 10.0203 24.3296 9.9942 24.1976 9.9942C24.0656 9.9942 23.9349 10.0203 23.813 10.0711C23.6912 10.1219 23.5806 10.1963 23.4876 10.29L19.2476 14.54C19.054 14.727 18.9426 14.9832 18.9379 15.2523C18.9332 15.5214 19.0356 15.7814 19.2226 15.975C19.4096 16.1686 19.6658 16.28 19.9349 16.2847C20.204 16.2894 20.464 16.187 20.6576 16L23.1976 13.41V19C23.1976 19.2652 23.303 19.5196 23.4905 19.7071C23.678 19.8946 23.9324 20 24.1976 20C24.4628 20 24.7172 19.8946 24.9047 19.7071C25.0922 19.5196 25.1976 19.2652 25.1976 19V13.41L27.7376 16C27.9239 16.1847 28.1753 16.2889 28.4376 16.29C28.5775 16.2976 28.7175 16.2757 28.8484 16.2258C28.9793 16.1758 29.0983 16.0989 29.1976 16C29.3838 15.8126 29.4884 15.5592 29.4884 15.295C29.4884 15.0308 29.3838 14.7774 29.1976 14.59L24.9076 10.29Z"
                    fill="#FD3C4A"
                  />
                </Svg>
              </View>
              <View>
                <View>
                  <Text style={{ color: "white", fontSize: 14 }}>Expenses</Text>
                </View>
                <View>
                  <Text
                    style={{ color: "white", fontSize: 22, fontWeight: "600" }}
                  >
                    $1200
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* income expense box end */}
          <View style={{ top: height / 4.5 }}>
            <Text
              style={{
                marginLeft: width / 25,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Spend Frequency
            </Text>
            {/* <Svg width="375" height="186" viewBox="0 0 375 186" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M51.6989 117.105C24.9299 117.105 12.5989 136.054 1 136.054V185.5H376V127.178C310.64 127.178 320.222 16 289.459 16C256.68 16 225.559 127.178 198.181 127.178C175.488 127.178 167.645 97.1588 146.743 97.1588C117.215 97.1588 116.485 156 92.2782 156C75.6363 156 74.1235 117.105 51.6989 117.105Z" fill="url(#paint0_linear_826_295)"/>
<Path d="M1 136.054C12.5989 136.054 24.9299 117.105 51.6989 117.105C74.1235 117.105 75.6363 156 92.2782 156C116.485 156 117.215 97.1588 146.743 97.1588C167.645 97.1588 175.488 127.178 198.181 127.178C225.559 127.178 256.68 16 289.459 16C320.222 16 310.64 127.178 376 127.178" stroke="#7F3DFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<Defs>
<LinearGradient id="paint0_linear_1723_656" x1="190.5" y1="3" x2="190.5" y2="172.5" gradientUnits="userSpaceOnUse">
<Stop stop-color="#8B50FF" stop-opacity="0.24"/>
<Stop offset="1" stop-color="#8B50FF" stop-opacity="0"/>
</LinearGradient>
</Defs>
</Svg> */}

            <Image
              resizeMethod="auto"
              resizeMode="contain"
              source={require("../assets/images/spendGraph.png")}
            />
          </View>

          <View style={{ top: height / 4 }}>
            <FlatList
              horizontal={true}
              data={tabs}
              renderItem={({ item }) => (
                <Item title={item.title} serial={item.serial} />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
            <Text
              style={{
                marginLeft: width / 25,
                fontSize: 18,
                fontWeight: "600",
                paddingTop: height / 33.833,
                marginBottom: height / 50,
              }}
            >
              Recent Transactions
            </Text>

            {recentTransactions.map((item) => {
              return (
                <TransactionItem
                  title={item.title}
                  type={item.type}
                  datetime={item.datetime}
                  note={item.note}
                  amount={item.amount}
                  key={item.id}
                />);
            })}


            {/* <FlatList
              data={recentTransactions}
              renderItem={({ item }) => (
                <TransactionItem
                  title={item.title}
                  type={item.type}
                  datetime={item.datetime}
                  note={item.note}
                  amount={item.amount}
                />
              )}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            /> */}
          </View>
        </View>
      </ScrollView>
      {/* <TabBar
      onPress={(tabIndex) => { console.log(tabIndex) }}
      values={[
        { title: "News", icon: require("../assets/images/plus.png") },
        { title: "Requests", icon: require("../assets/images/transaction.png") },
        { title: "Events", icon: require("../assets/images/plus.png") },
        { title: "Members", icon: require("../assets/images/plus.png") },
        { title: "Account", icon: require("../assets/images/plus.png") }
      ]}
    /> */}
      <Navbar />
    </View>
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
  },
  accountBalance: {
    top: height / 6.5,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "600",
  },
  incomeView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 5,
  },
  incomeBox: {
    width: width / 2.28 > 80 ? width / 2.28 : 80,
    backgroundColor: "#00A86B",
    height: height / 10.15,
    borderRadius: 28,
    margin: 10,
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  expenseBox: {
    width: width / 2.28 > 80 ? width / 2.28 : 80,
    backgroundColor: "#FD3C4A",
    height: height / 10.15,
    borderRadius: 28,
    margin: 10,
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  tabView: {},
  tabButton: {
    backgroundColor: "#FCEED4",
    borderRadius: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: width / 15.625,
    paddingRight: width / 15.625,
    marginLeft: 14,
  },
  tabButtonUnselected: {
    borderRadius: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: width / 15.625,
    paddingRight: width / 15.625,
    marginLeft: 14,
  },
  selectedText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FCAC12",
  },
  unselectedText: {
    color: "#91919F",
  },
  negative: {
    color: "#FD3C4A",
    fontWeight: "600",
    fontSize: 16,
  },
  positive: {
    color: "#00A86B",
    fontWeight: "600",
    fontSize: 16,
  }
});

export default Home;
