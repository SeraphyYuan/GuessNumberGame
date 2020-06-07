import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';


function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerName}>
                {props.name}
            </Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent:'center',
    },
    headerName: {
        fontSize: 18,
        color: 'black',
    }
});

