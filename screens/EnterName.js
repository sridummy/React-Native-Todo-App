import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Block, Input, Text } from '../components';

import { theme } from '../constants';


const EnterName = (params) => {
    const { navigate } = params.navigation;
    const [name, setName] = useState('');
    const handleNameChange = text => {
        setName(text);
    }

    return <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}><View style={styles.container}>
            <Block middle>
                <Text style={styles.title}>To get started enter your Name</Text>

                <Input
                    label="Name"
                    style={[styles.input]}
                    defaultValue={name}
                    onChangeText={text => handleNameChange(text)}
                />
                <Button gradient onPress={() => navigate('EnterDob')} title="Continue"><Text bold white center>Continue</Text></Button>
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
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    btn: {

    }
})

export default EnterName;