import React from "react";
import { Text, View, ScrollView, SafeAreaView, Alert } from "react-native";
import { Appbar } from "react-native-paper";

const Notification = ({ navigation: { goBack }, route }) => {

    const clearAlert = () =>
        Alert.alert('Clear', 'Do you want to delete all notifications ?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);


    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => goBack()} />
                <Appbar.Content title="Notification" />
                <Appbar.Action icon="delete" onPress={clearAlert} />
            </Appbar.Header>
            <ScrollView>
                <Text>Notification</Text>
            </ScrollView>
        </View>
    );
};

export default Notification;
