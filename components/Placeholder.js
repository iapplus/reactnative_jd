import React from 'react';
import {
    Image,View,
} from 'react-native';
import {no_network} from '../icons/images';

// 1.无网络
// 2.无数据
// 3.购物车为空
export default function Placeholder({type, offset_y}) {
    let views = {
        noNetwork: <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1,
        }}>
            <Image source={no_network} style={{
                width: 200,
                height: 600,
                marginTop: offset_y,
                resizeMode: 'contain',
            }}/>
        </View>,
        noContent: <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1,
        }}>
            <Image source={no_network} style={{
                width: 200,
                height: 600,
                marginTop: offset_y,
                resizeMode: 'contain',
            }}/>
        </View>,
    };
    return views[type];
}

