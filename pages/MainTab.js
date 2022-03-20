import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainTab123({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('SettingsPage')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tab_icon: {
    width: 14,
    height: 14,
  },
  tab_icon_focus: {
    width: 18,
    height: 18,
  },
});
