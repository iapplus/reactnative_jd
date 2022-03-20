import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
  Modal,
} from 'react-native';
import {ShopDetailPageSwiper} from '../components/ISwiper';
import {height, width} from '../tools/help';
import {avatar, back, jd_logo, more, share, zelda} from '../icons/images';
import {ShopTag} from '../components/ShopTag';
import TestEmitter from '../events/TestEvent';

export default class ShopDetailPage extends React.Component {
  static defaultProps = {
    navigation: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      swiperScroll: true,

      //    顶部条
      TopBarOpacity: new Animated.Value(0),
      TopBarIsShow: false,
      TopBarIcon: new Animated.Value(0.3),

      showSkuModal: false,
      skuModalBackground: new Animated.Value(0),
      skuColorCheckIndex: 0,
    };
    // console.log(props.route.params.name);
  }

  UNSAFE_componentWillMount() {
    TestEmitter.addListener('addCounter', val => {
      console.log('接收到消息9', val);
    });
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          onScroll={event => {
            {
              if (event.nativeEvent.contentOffset.y > 300) {
                console.log('>>>');
                if (!this.state.TopBarIsShow) {
                  Animated.timing(this.state.TopBarOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                  }).start();
                  Animated.timing(this.state.TopBarIcon, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                  }).start();
                  this.setState({
                    TopBarIsShow: true,
                  });
                  this.setState({
                    TopBarIsShow: true,
                  });
                }
              }

              if (event.nativeEvent.contentOffset.y < 280) {
                if (this.state.TopBarIsShow) {
                  Animated.timing(this.state.TopBarOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                  }).start();
                  Animated.timing(this.state.TopBarIcon, {
                    toValue: 0.3,
                    duration: 300,
                    useNativeDriver: false,
                  }).start();
                  this.setState({
                    TopBarIsShow: false,
                  });
                }
              }
            }
          }}
          scrollEventThrottle={200}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showSkuModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            onShow={() => {}}>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(this.state.skuModalBackground, {
                  toValue: 0,
                  duration: 100,
                  useNativeDriver: false,
                }).start(() => {
                  console.log('动画执行完毕!');
                  this.setState({
                    showSkuModal: false,
                  });
                });
              }}
              activeOpacity={1}>
              <Animated.View
                style={{
                  position: 'absolute',
                  backgroundColor: 'black',
                  opacity: this.state.skuModalBackground,
                  width: width,
                  height: height * 2,
                  marginTop: -height,
                }}></Animated.View>
            </TouchableOpacity>

            <View
              style={{
                // justifyContent: 'center',
                // alignItems: 'center',
                width: width,
                marginTop: 250,
                height: height / 2 + 300,
                backgroundColor: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingLeft: 10,
                paddingRight: 10,
                // opacity: 0.9,
                // borderWidth: 1,
                // marginTop: height / 2 - 100,
                // marginLeft: width / 2 - 50,
              }}>
              <View style={{marginTop: 30}}>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text>颜色</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: 20,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    {['深海微光', '深海微光', '深海微光', '深海微光'].map(
                      (obj, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            this.setState({
                              skuColorCheckIndex: index,
                            });

                            TestEmitter.emit('addCounter', {
                              name: 'wangpengyu',
                            });
                          }}
                          activeOpacity={1}>
                          <View
                            style={{
                              backgroundColor:
                                index === this.state.skuColorCheckIndex
                                  ? '#fc2e2e'
                                  : '#ffffff',
                              borderWidth: 1,
                              borderColor: 'red',
                              borderRadius: 14,
                              width: 70,
                              height: 28,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                color:
                                  index === this.state.skuColorCheckIndex
                                    ? '#ffffff'
                                    : '#000000',
                              }}>
                              {obj}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ),
                    )}
                  </View>
                </View>
              </View>
            </View>
          </Modal>

          <View style={{backgroundColor: 'white'}}>
            <ShopDetailPageSwiper
              images={[{imageSrc: zelda}, {imageSrc: zelda}, {imageSrc: zelda}]}
            />
            <ShopInfo />
          </View>
          <ShopPanelTemplate
            data={[
              {
                title: '优惠',
                items: [{title: '使用优惠券预估'}],
              },
              {
                title: '优惠',
                items: [{title: '满额返券'}],
              },
              {
                title: '活动',
                items: [{title: '高价回收，即时到账'}],
              },
            ]}
          />
          <ShopPanelTemplate
            data={[
              {
                title: '已选',
                items: [{title: '原盒(没有游戏),1件，可选服务'}],
              },
              {
                title: '送至',
                items: [
                  {title: '广东深圳龙岗区坂田街道'},
                  {title: '现货、15:00前下单，预计08月27日送达'},
                ],
              },
              {
                title: '运费',
                items: [{title: '免运费'}],
              },
            ]}
          />
          <ShopComment />
        </ScrollView>
        <TopBar navigation={this.props.navigation} state={this.state} />

        <View
          style={{
            position: 'absolute',
            bottom: 34,
            left: 0,
            backgroundColor: 'white',
            width: width,
            height: 40,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderColor: '#efefef',
            alignItems: 'center',
          }}>
          <View></View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <CircleButton
              title={'加入购物车'}
              color={'#ffb600'}
              clickEvent={() => {
                this.setState({
                  showSkuModal: true,
                });

                Animated.timing(this.state.skuModalBackground, {
                  toValue: 0.4,
                  duration: 300,
                  useNativeDriver: false,
                }).start();
              }}
            />
            <CircleButton title={'立即购买'} color={'#ff3636'} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    // height: height - 90,
    marginTop: -44,
  },
  actionBarIcon: {
    width: 32,
    height: 32,
    borderRadius: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IconButton = ({file, onClick}) => (
  <TouchableOpacity activeOpacity={1} onPress={() => onClick()}>
    <View style={styles.actionBarIcon}>
      <Image
        source={file}
        style={{
          width: 16,
          height: 16,
          resizeMode: 'contain',
        }}
      />
    </View>
  </TouchableOpacity>
);

const CircleButton = ({title, clickEvent, color}) => (
  <TouchableOpacity onPress={() => clickEvent()} activeOpacity={1}>
    <View
      style={{
        width: 100,
        height: 32,
        marginLeft: 3,
        marginRight: 3,
        backgroundColor: color,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 14}}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const ShopComment = () => (
  <View
    style={{
      marginTop: 8,
      backgroundColor: 'white',
      paddingLeft: 32,
      paddingRight: 32,
    }}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        weight: 1,
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{backgroundColor: 'red', width: 2, height: 20}}></View>
        <Text>评价</Text>
      </View>
      <Text>好评度:96%</Text>
    </View>
    {[2, 3, 4, 5, 6, 7].map((obj, index) => {
      return (
        <View key={index} style={{flexDirection: 'column', marginTop: 20}}>
          {/*用户信息+月份*/}
          {/*头像*/}
          <View style={{flexDirection: 'row', display: 'flex'}}>
            <View
              style={{
                width: 42,
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 21,
                border: 2,
              }}>
              <Image
                source={avatar}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{marginLeft: 10, marginTop: 5, flexDirection: 'column'}}>
              <Text>💎钻石架构师</Text>
              {/*评价星星*/}
              <View>
                <Text>⭐️⭐️⭐️⭐️⭐️</Text>
              </View>
            </View>
          </View>
          {/*评价内容摘要*/}
          <View style={{marginTop: 10}}>
            <Text>
              阿萨达萨达萨达撒打算打算的撒大阿萨达萨达萨达撒打算打算的撒大阿萨达萨达萨达撒打算打算的撒大阿萨达萨达萨达撒打算打算的撒大
            </Text>
          </View>
          {/*三张图片*/}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={jd_logo}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={jd_logo}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={jd_logo}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      );
    })}
  </View>
);

const ShopPanelTemplate = ({data}) => (
  <View
    style={{
      marginTop: 8,
      backgroundColor: 'white',
      paddingLeft: 32,
      paddingRight: 32,
    }}>
    <View style={{display: 'flex', flexDirection: 'column'}}>
      {data.map((obj, index) => (
        <View
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: obj.items.length * 40,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: 40,
            }}>
            <Text style={{fontWeight: '900'}}>{obj.title}</Text>
          </View>
          <View
            style={{display: 'flex', flexDirection: 'column', marginLeft: 50}}>
            {obj.items.map((objItems, itemsIndex) => (
              <View
                key={itemsIndex}
                style={{
                  height: 40,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>{objItems.title}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
    <View style={{display: 'flex', flexDirection: 'column'}} />
  </View>
);

//底部购物车、立即购买条
const BottomBar = ({context}) => (
  <View
    style={{
      position: 'absolute',
      bottom: 34,
      left: 0,
      backgroundColor: 'white',
      width: width,
      height: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderColor: '#efefef',
      alignItems: 'center',
    }}>
    <View></View>
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <CircleButton
        title={'加入购物车'}
        color={'#ffb600'}
        clickEvent={() => {
          context.setState({
            showSkuModal: true,
          });
        }}
      />
      <CircleButton title={'立即购买'} color={'#ff3636'} />
    </View>
  </View>
);

const TopBar = ({navigation, state}) => (
  <Animated.View
    style={{
      position: 'absolute',
      marginTop: 48,
      width: width,
      height: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 8,
      paddingLeft: 8,
    }}>
    <Animated.View
      style={{
        position: 'absolute',
        height: 48 * 2,
        top: 0,
        width: width,
        marginTop: -48,
        backgroundColor: 'white',
        opacity: state.TopBarOpacity,
        borderBottom: 1,
        borderWidth: 1,
        borderColor: '#efefef',
      }}></Animated.View>
    <Animated.View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        opacity: state.TopBarIcon,
      }}>
      <IconButton
        file={back}
        onClick={() => {
          console.log(state);
          navigation.pop();
        }}
      />
    </Animated.View>

    <Animated.View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: state.TopBarOpacity,
      }}>
      {['商品', '评价', '详情', '推荐'].map((obj, index) => (
        <View
          style={{width: 50, justifyContent: 'center', alignItems: 'center'}}
          key={index}>
          <Text>{obj}</Text>
        </View>
      ))}
    </Animated.View>
    <Animated.View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        justifyContent: 'flex-end',
        opacity: state.TopBarIcon,
      }}>
      <IconButton file={share} />
      <View style={{width: 8, height: 32}} />
      <IconButton file={more} />
    </Animated.View>
  </Animated.View>
);

//商品信息
const ShopInfo = () => (
  <View
    style={{
      backgroundColor: 'white',
      width: width,
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 32,
      paddingRight: 32,
    }}>
    <View
      style={{
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
      }}>
      <Text style={{color: '#ff452f', fontSize: 20}}>¥{'500.00'}</Text>
      {/*<View style={{flexDirection: 'row', display: 'flex'}}>*/}
      {/*    <Text style={{color: '#ff452f'}}>*/}
      {/*        降价通知*/}
      {/*    </Text>*/}
      {/*    <Text style={{color: '#ff452f'}}>*/}
      {/*        收藏*/}
      {/*    </Text>*/}
      {/*</View>*/}
    </View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{fontWeight: '900', fontSize: 16}}>
        【京闪配送】塞尔达传说 荒野之息 中文 赠电子攻略 塞尔达传说 荒野之息 中文
        赠电子攻略
      </Text>
    </View>
    <View
      style={{
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <ShopTag index={1} shopName={''} />
    </View>
  </View>
);
