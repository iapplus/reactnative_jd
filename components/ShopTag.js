import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet, Text, View,
} from 'react-native';

export const ShopTag = ({index, shopName}) => {
    let views = [
        {name: '京东国际', color: 'purple'},
        {name: '京东物流', color: 'red'},
        {name: '京东超市', color: '#dec800'},
    ];
    if (index < views.length) {
        return <View>
            <View
                style={{
                    width: 62,
                    height: 16,
                    borderRadius:4,
                    backgroundColor: views[index].color,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
                    {views[index].name}
                </Text>
            </View>
            <Text style={{fontSize: 13,lineHeight:16,flexWrap: 'wrap', marginTop: -16}}>
                &emsp;&emsp;&emsp;&emsp;&emsp;{shopName}
            </Text>
        </View>;
    }
    return <Text style={{fontSize: 13, marginLeft: 4, flexWrap: 'wrap'}}>
        {shopName}
    </Text>;
};
