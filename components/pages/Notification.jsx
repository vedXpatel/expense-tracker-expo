import React from "react";
import {Text, View, ScrollView, SafeAreaView, Alert} from "react-native";
import {Appbar} from "react-native-paper";
import {ListItem} from '@rneui/themed';

const Notification = ({navigation: {goBack}, route}) => {

    const clearAlert = () =>
        Alert.alert('Clear', 'Do you want to delete all notifications ?', [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

    const notificationTitle = "Shopping Budget has exceeded the limit";
    const notificationSubTitle = "Your shopping budget has exceeded the limit";

    return (
        <View>
            <Appbar.Header elevated mode='center-aligned'>
                <Appbar.BackAction onPress={() => goBack()}/>
                <Appbar.Content title="Notifications"/>
                <Appbar.Action icon="delete" onPress={clearAlert}/>
            </Appbar.Header>
            <ScrollView>
                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>{notificationTitle.length < 35 ? notificationTitle : notificationTitle.slice(0, 35) + "..."}</ListItem.Title>
                        <ListItem.Subtitle>{notificationSubTitle.slice(0, 35) + "..."}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text>19:30</Text>
                </ListItem>
                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>{notificationTitle.length < 35 ? notificationTitle : notificationTitle.slice(0, 35) + "..."}</ListItem.Title>
                        <ListItem.Subtitle>{notificationSubTitle.slice(0, 35) + "..."}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text>19:30</Text>
                </ListItem>
                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>{notificationTitle.length < 35 ? notificationTitle : notificationTitle.slice(0, 35) + "..."}</ListItem.Title>
                        <ListItem.Subtitle>{notificationSubTitle.slice(0, 35) + "..."}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text>19:30</Text>
                </ListItem>
            </ScrollView>
        </View>
    );
};

export default Notification;
