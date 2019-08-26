import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


import { sizes } from '../constants/theme';


const UploadProfilePic = (params) => {
    const { navigate } = params.navigation;
    return <View style={styles.container}><Text>Please uplad Your Profile Pic</Text><Button title="Continue" onPress={() => navigate('Welcome')} /></View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: sizes.h1
    },
    input: {

    },
    btn: {

    }
})

export default UploadProfilePic;