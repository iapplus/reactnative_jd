import {Alert, Modal, Text, View} from 'react-native';
import {height, width} from '../tools/help';
import React from 'react';

export const Toast = ({context, msg, modalVisible}) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}
        onShow={() => {
            let timer = setTimeout(() => {
                context.setState({
                    modalVisible: false,
                });
                clearTimeout(timer);
            }, 1500);
        }}
    >
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100 * 0.618,
            backgroundColor: 'black',
            borderRadius: 8,
            opacity: 0.9,
            borderWidth: 1,
            marginTop: height / 2 - 100,
            marginLeft: width / 2 - 50,
        }}>
            <Text style={{color: '#ffffff'}}>{
                msg
            }</Text>
        </View>
    </Modal>
);
