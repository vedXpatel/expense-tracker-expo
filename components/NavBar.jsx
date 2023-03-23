import React from "react";
import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import Login from "./login/Login";
import Budget from "./Budget";
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {

    const navigation = useNavigation();

    const _renderIcon = (routeName, selectedTab) => {
        let icon = "";

        switch (routeName) {
            case "Login":
                icon = "home";
                break;
            case "title2":
                icon = "dollar";
                break;
            case "Budget":
                icon = "pie-chart";
                break;
            case "title4":
                icon = "user";
                break;
        }

        return (
            <FontAwesome name={icon} size={24} color="black" />
        );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <View >
            <CurvedBottomBarExpo.Navigator
                type="DOWN"
                style={styles.bottomBar}
                shadowStyle={styles.shawdow}
                height={55}
                circleWidth={50}
                bgColor="white"
                initialRouteName="Login"
                borderTopLeftRight
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("AddExpense")}
                        >
                            <AntDesign name="plus" size={32} color="white" />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >
                <CurvedBottomBarExpo.Screen
                    name="Login"
                    position="LEFT"
                    component={Login}
                />
                <CurvedBottomBarExpo.Screen
                    name="title2"
                    position="LEFT"
                    component={Login}
                />
                <CurvedBottomBarExpo.Screen
                    name="Budget"
                    component={Budget}
                    position="RIGHT"
                />
                <CurvedBottomBarExpo.Screen
                    name="title4"
                    component={Login}
                    position="RIGHT"
                />
            </CurvedBottomBarExpo.Navigator>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    shawdow: {
        shadowColor: "#0f0f0f",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: "center",

    },
    bottomBar: {

    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7F3DFF",
        bottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: "gray",
    },
    tabbarItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 30,
        height: 30,
    },
    screen1: {
        flex: 1,
        backgroundColor: "#BFEFFF",
    },
    screen2: {
        flex: 1,
        backgroundColor: "#FFEBCD",
    },
});
