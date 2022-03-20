import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {width} from '../tools/help';

//搜索条
export const CategorySearchBar = ({backgroundColor, clickEvent}) => {
    return (<View style={{flexDirection: 'row', display: 'flex', backgroundColor: backgroundColor, paddingBottom: 3}}>
        <View style={styles.searchBar}>
            <TouchableOpacity activeOpacity={1} onPress={() => clickEvent()}>
                <Image source={require('../icons/search.png')}
                       style={styles.searchBarIcon}/>
            </TouchableOpacity>
            <TextInput underlineColorAndroid={'transparent'} autoFocus={false}
                       placeholder={'iphoneX'} style={{flex: 1, paddingLeft: 10, color: 'black'}}/>
            <Image source={require('../icons/camera.png')}
                   style={styles.searchBarIcon}/>
        </View>
        {/*<TouchableOpacity>*/}
        {/*    <Text style={{color: '#7e7e7e', marginTop: 10, marginLeft: 10}}>取消</Text>*/}
        {/*</TouchableOpacity>*/}
    </View>);
};
const styles = StyleSheet.create({
    searchBar: {
        marginTop: 2,
        marginLeft: 20,
        paddingLeft:10,
        paddingRight:10,
        width: width - 80,
        height: 36,
        backgroundColor: '#ffffff',
        borderRadius: 36,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchBarIcon: {width: 20, height: 20, marginTop: 8},
    body: {
        backgroundColor: 'white',
        flex: 1,
    },
});
