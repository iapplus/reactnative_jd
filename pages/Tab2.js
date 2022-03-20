import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class Tab2 extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.popToTop()}>
              <View>
                <Text>返回</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
