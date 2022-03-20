import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tab = createBottomTabNavigator();
export default class MarketPage extends React.Component {
  render() {
    var x = this.props.route.params;
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Shop1') {
                return (
                  <View>
                    <Text />
                  </View>
                );
              } else if (route.name === 'Shop2') {
                return (
                  <View>
                    <Text />
                  </View>
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Shop1"
            component={Tab1}
            options={{tabBarLabel: '女装'}}
          />
          <Tab.Screen
            name="Shop2"
            component={Tab2}
            options={{tabBarLabel: '男装'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
