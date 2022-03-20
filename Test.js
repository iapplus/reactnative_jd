
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Button
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class Test extends React.Component {

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={styles.a}>
                            <View style={styles.b}>
                                <Text>
                                    Hello World
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    a: {
        display: 'flex',
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    b: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },
    c: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
    },
    body: {
        backgroundColor: Colors.white,
    },
});
