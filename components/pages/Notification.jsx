import React from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";

const Notification = ({ navigation: { goBack }, route }) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => goBack()} />
                <Appbar.Content title="Title" />
                <Appbar.Action icon="delete" onPress={() => alert('Do you want to clear all the notifications ?')} />
            </Appbar.Header>
            <ScrollView>

                <Text>Notification</Text>
            </ScrollView>
        </View>
    );
};

export default Notification;
