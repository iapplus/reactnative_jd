import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {width} from '../tools/help';
import {avatar, msg, waiToPay, wallet} from '../icons/images';

export default function Home({navigation}) {
  this.toSettingPage = () => {
    navigation.push('SettingsPage', {
      name: 'wangpengyu',
    });
  };
  return (
    <>
      {/*<StatusBar*/}
      {/*    // backgroundColor={'white'} translucent={false} hidden={false}*/}
      {/*    //        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}*/}
      {/*/>*/}
      <StatusBar
        // backgroundColor={'red'}
        // translucent={false}
        // hidden={false}
        barStyle={'light-content'}
      />
      {/*<StatusBar*/}
      {/*    hidden={false}*/}
      {/*    backgroundColor={'#ffcb00'}*/}
      {/*    translucent={false}*/}
      {/*    barStyle={'light-content'}*/}
      {/*    // showHideTransition={'fade'}*/}
      {/*    networkActivityIndicatorVisible={true}/>*/}
      <SafeAreaView style={styles.body}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={{
              backgroundColor: '#ffcb00',
              width: width,
              height: 180,
              overflow: 'hidden',
            }}>
            <View
              style={{
                width: 400,
                height: 400,
                borderRadius: 200,
                marginTop: -200,
                marginLeft: -200,
                backgroundColor: '#ffd83f',
                position: 'absolute',
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: 10,
                paddingRight: 10,
              }}>
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={this.toSettingPage.bind(this)}>
                  <Text
                    style={{marginRight: 10, fontSize: 15, fontWeight: '300'}}>
                    设置
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={msg}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
              <View
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: 'red',
                  position: 'absolute',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: -5,
                  right: 3,
                }}>
                <Text style={{color: 'white'}}>4</Text>
              </View>
            </View>
            <View
              style={{
                width: width,
                height: 90,
                display: 'flex',
                flexDirection: 'row',
              }}>
              {/*头像*/}
              <View
                style={{
                  marginLeft: 20,
                  width: 84,
                  height: 84,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  borderRadius: 42,
                  border: 2,
                }}>
                <Image
                  source={avatar}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                  }}
                />
              </View>
              <View style={{marginLeft: 10, marginTop: 5}}>
                <Text>💎钻石架构师</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  {['会员领京豆', '小白幸运', '家庭号'].map((obj, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          backgroundColor: '#f8d962',
                          marginLeft: 3,
                          height: 20,
                          justifyContent: 'center',
                          textAlign: 'center',
                          paddingLeft: 5,
                          paddingRight: 5,
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 0.5,
                        }}>
                        <Text style={{fontWeight: '300', fontSize: 12}}>
                          {obj}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: width,
                marginTop: 10,
              }}>
              {[
                {item: '商品关注', num: 0},
                {item: '店铺关注', num: 4},
                {
                  item: '喜欢的内容',
                  num: 0,
                },
                {item: '浏览记录', num: 0},
              ].map((obj, index) => {
                return (
                  <View style={{flex: 1}} key={index}>
                    <Text style={{textAlign: 'center', fontSize: 18}}>
                      {obj.num}
                    </Text>
                    <Text
                      style={{
                        marginTop: 6,
                        height: 100,
                        textAlign: 'center',
                      }}>
                      {obj.item}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              width: width,
              height: 70,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: width,
              }}>
              {[
                {item: '待付款', num: 0, icon: waiToPay},
                {item: '待收获', num: 0, icon: waiToPay},
                {item: '待评价', num: 15, icon: waiToPay},
                {item: '退换收后', num: 0, icon: waiToPay},
                {item: '我的订单', num: 0, icon: waiToPay},
              ].map((obj, index) => {
                return (
                  <View style={{flex: 1}} key={index}>
                    <Image
                      source={obj.icon}
                      style={{
                        width: 16,
                        height: 16,
                        marginLeft: (width - 5 * 16) / 5 / 2,
                        marginTop: 20,
                      }}
                    />
                    <Text
                      style={{
                        height: 100,
                        textAlign: 'center',
                        fontWeight: '300',
                        marginTop: 8,
                      }}>
                      {obj.item}
                    </Text>
                    {obj.num > 0 ? (
                      <View
                        style={{
                          position: 'absolute',
                          right: 0,
                          marginRight: 14,
                          marginTop: 10,
                          backgroundColor: 'red',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 16,
                          height: 16,
                          borderRadius: 8,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: 16,
                          }}>
                          {obj.num}
                        </Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              width: width,
              height: 70,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: width,
              }}>
              {[
                {item: '京豆', num: 996},
                {item: '优惠券', num: 5},
                {item: '白条', num: 1888},
                {item: '金条借款', num: 0},
              ].map((obj, index) => {
                return (
                  <View style={{flex: 1}} key={index}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 18,
                        marginTop: 15,
                      }}>
                      {obj.num}
                    </Text>
                    <Text
                      style={{
                        height: 100,
                        textAlign: 'center',
                        fontWeight: '300',
                        marginTop: 5,
                      }}>
                      {obj.item}
                    </Text>
                  </View>
                );
              })}
              <View style={{flex: 1}}>
                <Image
                  source={wallet}
                  style={{
                    height: 16,
                    width: 16,
                    marginTop: 10,
                    marginLeft: width / 5 / 2 - 8,
                  }}
                />
                <Text
                  style={{
                    height: 100,
                    textAlign: 'center',
                    fontWeight: '300',
                    marginTop: 10,
                  }}>
                  我的钱包
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              width: width,
              height: 200,
            }}></View>
          {/*<App abc={() => {*/}
          {/*    console.log('aaaaa');*/}
          {/*}}/>*/}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

//传递事件
// class App extends React.Component {
//     onPressLearnMore = () => {
//         console.log(this.props.abc);
//     };
//
//     render() {
//         return (
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                 <Button
//                     onPress={this.props.abc}
//                     title="Learn More"
//                     color="#841584"
//                     accessibilityLabel="Learn more about this purple button"
//                 />
//             </View>
//         );
//     }
// }

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
    flex: 1,
    backgroundColor: '#ffcb00',
  },
  scrollView: {
    backgroundColor: '#F3F3F3',
  },
});
