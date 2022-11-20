import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

const BodyText = props => {
    <View>
        <View>
            <Text style = { styles.headerText }>Coming Soon</Text>

            <Text style = { styles.body }>Bringing Muslims together</Text>
            </View>
    </View>

}

const styles = StyleSheet.create({
    headerText: {
        height: 15,
        width: 77,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'flex-end',
        color: '#0B0B0B',

    },
    body: {
        fontFamily: 'open-sans'
    }
});

export default BodyText;