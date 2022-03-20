import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import MarketPage from './pages/MarketPage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import ShopDetailPage from './pages/ShopDetailPage';
import {Image, StyleSheet, View} from 'react-native';
import Home from './pages/tabsview/Home';
import Category from './pages/tabsview/Category';
import ShopCarPage from './pages/ShopCarPage';
import UserPage from './pages/UserPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RefreshPageTest from "./pages/RefreshPageTest";

const Stack = createNativeStackNavigator();
const AppTabs = createBottomTabNavigator();

// const ActionsStackScreen = () => (
//   <Stack.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerTintColor: 'white',
//       headerStyle: {backgroundColor: 'tomato'},
//     }}>
//
//   </Stack.Navigator>
// );



const HomeStack = () => (
  <Stack.Navigator>

    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="MarketPage"
      component={MarketPage}
      options={{
        headerShown: true,
        // headerStatusBarHeight:0,
        // // headerTitle: props => <View style={{width: width, height: 10, backgroundColor: 'green'}}/>,
        title: '',
        // headerStyle: {
        //     backgroundColor: 'red',
        // },
        // headerTintColor: '#ffffff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
      }}
    />

</Stack.Navigator>
);




const Root = () => (
  <Stack.Navigator
    // initialRouteName="UserPage"
    // screenOptions={{
    //   headerTintColor: 'white',
    //   headerStyle: {backgroundColor: 'tomato'},
    // }}
  >

    <Stack.Screen
      name="MarketPage"
      component={MarketPage}
      options={{
        headerShown: true,
        // headerStatusBarHeight:0,
        // // headerTitle: props => <View style={{width: width, height: 10, backgroundColor: 'green'}}/>,
        title: '',
        // headerStyle: {
        //     backgroundColor: 'red',
        // },
        // headerTintColor: '#ffffff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
      }}
    />

    <Stack.Screen
      name="SearchPage"
      component={SearchPage}
      options={{
        headerShown: false,
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="SettingsPage"
      component={SettingsPage}
      options={{
        title: '设置',
        headerShown: true,
        animationEnabled: true,
      }}
    />

    <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{
        title: '',
        headerShown: false,
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="ShopDetailPage"
      component={ShopDetailPage}
      options={{
        title: '商品详情',
        headerShown: false,
        animationEnabled: true,
      }}
    />
    <Stack.Screen
      name="RefreshPageTest"
      component={RefreshPageTest}
      options={{
        title: '刷新页',
        headerShown: false,
        animationEnabled: true,
      }}
    />
  </Stack.Navigator>
);





function AppTabsScreen() {
  return (
    <AppTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return focused ? (
              <View>
                <Image
                  source={require('./icons/home_focus.png')}
                  style={styles.tab_icon}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require('./icons/home_blur.png')}
                  style={styles.tab_icon_focus}
                />
              </View>
            );
          } else if (route.name === 'Category') {
            return focused ? (
              <View>
                <Image
                  source={require('./icons/catagory_focus.png')}
                  style={styles.tab_icon}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require('./icons/catagory_blur.png')}
                  style={styles.tab_icon_focus}
                />
              </View>
            );
          } else if (route.name === 'ShopCar') {
            return focused ? (
              <View>
                <Image
                  source={require('./icons/shop_car_focus.png')}
                  style={styles.tab_icon}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require('./icons/shop_car_blur.png')}
                  style={styles.tab_icon_focus}
                />
              </View>
            );
          } else if (route.name === 'User') {
            return focused ? (
              <View>
                <Image
                  source={require('./icons/user_focus.png')}
                  style={styles.tab_icon}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require('./icons/user_blur.png')}
                  style={styles.tab_icon_focus}
                />
              </View>
            );
          }
        },
      })}
      tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray'}}>
      <AppTabs.Screen
        name="Home"
        component={HomeStack}
        options={{tabBarLabel: '首页', tabBarBadge: 3, headerShown: false}}
      />
      <AppTabs.Screen
        name="Category"
        component={Category}
        options={{tabBarLabel: '分类', headerShown: false}}
      />
      <AppTabs.Screen
        name="ShopCar"
        component={ShopCarPage}
        options={{tabBarLabel: '购物车', headerShown: false}}
      />
      <AppTabs.Screen
        name="User"
        component={UserPage}
        options={{tabBarLabel: '用户', headerShown: false}}
      />
    </AppTabs.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    {/*<AppTabsScreen />*/}
    <Stack.Navigator initialRouteName="Home">
      {/*<Stack.Screen name="Home" component={AppTabsScreen} />*/}
      {/*<Stack.Screen name="Details" component={UserPageStackScreen} />*/}
      <Stack.Screen
        name="Home"
        component={AppTabsScreen}
        options={{
          headerShown: false,
          headerStatusBarHeight: 0,
          // headerTitle: props => <View style={{width: width, height: 10, backgroundColor: 'green'}}/>,
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          // headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Root" component={Root}/>
      <Stack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          headerShown: true,
          title: '',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
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
