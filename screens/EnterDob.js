import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Button, Block, Input, Text } from '../components';

import { theme } from '../constants';


const EnterDob = (params) => {
    const { navigate } = params.navigation;
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);
    const [dob, setDob] = useState('');

    const toggleDatePicker = () => {
        setDatePickerVisibility(datePickerVisibility => !datePickerVisibility);
    }

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        setDob(date.toDateString());
        toggleDatePicker();
    };

    return <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}><View style={styles.container}>
            <Block middle>
                <Text style={styles.title}>Enter your date of birth</Text>
                <TouchableWithoutFeedback onPress={toggleDatePicker}>
                    <View>
                        <Text gray2 style={styles.subtitle}>Date of birth</Text>
                        <DateTimePicker
                            isVisible={datePickerVisibility}
                            onConfirm={handleDatePicked}
                            onCancel={toggleDatePicker}
                        />
                        <Text style={styles.input}>{dob}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Button gradient onPress={() => navigate('UploadProfilePic')} title="Continue"><Text bold white center>Continue</Text></Button>
            </Block>
        </View>
        </Block>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: theme.sizes.h1
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 20,
        marginTop: 20
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 20,
        marginBottom: 20,
        fontSize: theme.sizes.font,
        fontWeight: '500',
    },
})

export default EnterDob;