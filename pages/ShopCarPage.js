import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
  NativeModules,
} from 'react-native';

import {
  radio_btn_checked,
  radio_btn_checked_false,
  zelda,
} from '../icons/images';
import {height, width} from '../tools/help';
import {ShopTag} from '../components/ShopTag';
import Placeholder from '../components/Placeholder';
import SlideDelete from '../components/SlideDelete';

export default class ShopCarPage extends React.Component {
  static defaultProps = {
    navigation: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      shopCarList: [
        {
          id: 1,
          price: 1688,
          title: '任天堂(Nintendo) Switch主机游戏卡 NS掌机专用游戏卡 ',
          stock: 200,
          checked: true,
          buyCount: 1,
          goods_image: 'zelda',
        },
        {
          id: 2,
          price: 488,
          title: '任天堂(Nintendo) Switch主机游戏卡 NS掌机专用游戏卡 ',
          stock: 200,
          checked: true,
          buyCount: 2,
        },
        {
          id: 3,
          price: 1688,
          title: '任天堂(Nintendo) Switch主机游戏卡 NS掌机专用游戏卡 ',
          stock: 200,
          checked: true,
          buyCount: 1,
        },
        {
          id: 4,
          price: 388,
          title: '任天堂(Nintendo) Switch主机游戏卡 NS掌机专用游戏卡 ',
          stock: 200,
          checked: true,
          buyCount: 1,
        },
        {
          id: 5,
          price: 1688,
          title: '任天堂(Nintendo) Switch主机游戏卡 NS掌机专用游戏卡 ',
          stock: 200,
          checked: true,
          buyCount: 1,
        },
        {
          id: 6,
          price: 788,
          title: '任天堂(Nintendo) Switch主机游戏卡 NS掌机专用游戏卡',
          stock: 200,
          checked: true,
          buyCount: 1,
        },
      ],
      allCheckedBtn: true, //全部
      mL: new Animated.Value(0),
      fadeInOpacity: new Animated.Value(0),
      touchBlockPositionX: 0,
    };
  }

  totalPrice() {
    let price = 0;
    this.state.shopCarList.map((obj, index) => {
      if (obj.checked) {
        price += obj.price * obj.buyCount;
      }
    });
    return price;
  }

  render() {
    return (
      <>
        <SafeAreaView style={{backgroundColor: 'white'}}>
          <ScrollView
            scrollEnabled={this.state.shopCarList.length !== 0}
            contentInsetAdjustmentBehavior="automatic"
            style={{
              height:
                this.state.shopCarList.length === 0
                  ? height - 80 - 46
                  : height - 80 - 46 * 2,
              backgroundColor: '#f5f5f5',
            }}>
            {this.state.shopCarList.length === 0 ? (
              <View
                style={{backgroundColor: '#efefef', height: height - 80 - 46}}>
                {/*<TouchableOpacity onPress={() => {*/}
                {/*    console.log(this.refs.xxx.positionReset())*/}
                {/*}} activeOpacity={1}>*/}
                {/*    <Text>*/}
                {/*        删除*/}
                {/*    </Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<MyRnTestView style={{width:190,height:20,backgroundColor:'red'}}/>*/}

                {[].map((obj, index) => {
                  return (
                    <View style={{marginTop: 8}}>
                      <SlideDelete
                        ref={'xxx'}
                        btns={[
                          {
                            title: '置顶',
                            clickEvent: () => {
                              console.log('点击了置顶');
                              console.log(
                                NativeModules.ToastForAndroid.show(1000),
                              );
                            },
                          },
                          {
                            title: '已读',
                            clickEvent: () => {
                              console.log('点击了已读');
                            },
                          },
                          {
                            title: '删除',
                            clickEvent: () => {
                              console.log('点击了删除');
                            },
                          },
                        ]}
                        height={60}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 60,
                          }}>
                          <Text style={{alignItems: 'center'}}>
                            这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息
                          </Text>
                        </View>
                      </SlideDelete>
                    </View>
                  );
                })}
                {/*<Video source={require('../videos/douyin.mp4')+''}*/}
                {/*       ref={(ref) => {*/}
                {/*           this.player = ref;*/}
                {/*       }}*/}
                {/*       onLoad={() => {*/}
                {/*       }}*/}
                {/*       onBuffer={() => {*/}
                {/*           console.log('buffer');*/}
                {/*       }}*/}
                {/*       onError={(e) => {*/}
                {/*           console.log(e);*/}
                {/*       }}*/}
                {/*       style={styles.backgroundVideo}/>*/}

                <Placeholder type={'noNetwork'} offset_y={100} />
              </View>
            ) : (
              this.state.shopCarList.map((obj, index) => {
                return (
                  <View style={{height: 155}} key={index}>
                    <SlideDelete
                      ref={'list' + obj.id}
                      btns={[
                        // {
                        //     title: '置顶', clickEvent: () => {
                        //         console.log('点击了置顶');
                        //         console.log(NativeModules.ToastForAndroid.show(1000));
                        //
                        //     },
                        // },
                        {
                          title: '收藏',
                          clickEvent: () => {
                            console.log('点击了已读');
                          },
                        },
                        {
                          title: '删除',
                          clickEvent: () => {
                            console.log('点击了删除');
                            return {
                              result: false,
                              tip: '删除失败',
                            };
                          },
                        },
                      ]}
                      onPanResponderGrant={() => {
                        let shopCarList = this.state.shopCarList;
                        for (let i = 0; i < shopCarList.length; i++) {
                          if (shopCarList[i].id !== shopCarList[index].id) {
                            this.refs[
                              'list' + shopCarList[i].id
                            ].positionReset();
                          }
                        }
                      }}
                      height={150}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 150,
                          paddingBottom: 8,
                          paddingRight: 8,
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              const checked =
                                this.state.shopCarList[index].checked;
                              const shopCarList = this.state.shopCarList;
                              shopCarList[index].checked = !checked;
                              this.setState({
                                shopCarList: shopCarList,
                              });
                              //检测是否全部选定
                              let checkedNumber = 0;
                              for (let x = 0; x < shopCarList.length; x++) {
                                if (shopCarList[x].checked) {
                                  checkedNumber += 1;
                                }
                              }

                              this.setState({
                                allCheckedBtn:
                                  checkedNumber === shopCarList.length,
                              });
                            }}
                            activeOpacity={1}>
                            {obj.checked ? (
                              <Image
                                source={radio_btn_checked}
                                style={{
                                  width: 18,
                                  height: 18,
                                }}
                              />
                            ) : (
                              <Image
                                source={radio_btn_checked_false}
                                style={{
                                  width: 18,
                                  height: 18,
                                }}
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.push('ShopDetailPage', {
                              name: 'wangpengyu',
                            });
                          }}
                          activeOpacity={1}>
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              // backgroundColor: 'red',
                              width: 100,
                              height: 100,
                              marginTop: 25,
                            }}>
                            <Image
                              source={zelda}
                              style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                        <View style={{paddingLeft: 14, flex: 1, padding: 16}}>
                          <View style={{height: 40}}>
                            <ShopTag index={1} shopName={obj.title} />
                          </View>
                          <View
                            style={{
                              height: 20,
                              backgroundColor: '#efefef',
                              borderRadius: 10,
                              width: 200,
                              paddingLeft: 10,
                              justifyContent: 'center',
                            }}>
                            <Text style={{fontSize: 10}}>
                              塞尔达传说 荒野之息 中文 赠电子攻略
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 20,
                            }}>
                            <View style={{width: 100, height: 30}}>
                              <Text style={{color: '#ff452f', fontSize: 14}}>
                                ¥{obj.price}
                              </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <View
                                style={{
                                  width: 20,
                                  height: 20,
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text>-</Text>
                              </View>
                              <View
                                style={{
                                  width: 40,
                                  height: 20,
                                  backgroundColor: '#e7e7e7',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <TextInput
                                  style={{color: 'black'}}
                                  value={obj.buyCount + ''}
                                />
                              </View>
                              <View
                                style={{
                                  width: 20,
                                  height: 20,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text>+</Text>
                              </View>
                            </View>
                            {/*<Text style={{color:'red'}}>*/}
                            {/*    删除*/}
                            {/*</Text>*/}
                          </View>
                        </View>
                      </View>
                    </SlideDelete>
                  </View>
                );
              })
            )}
          </ScrollView>
          {this.state.shopCarList.length === 0 ? (
            <></>
          ) : (
            <View
              style={{
                width: width,
                height: 48,
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 0,
                marginBottom: -48,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 18,
                paddingRight: 18,
                borderTopColor: '#e7e7e7',
                borderTopWidth: 1,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    const shopCarList = this.state.shopCarList;
                    shopCarList.map((obj, index) => {
                      shopCarList[index].checked = !this.state.allCheckedBtn;
                    });
                    this.setState({
                      shopCarList: shopCarList,
                      allCheckedBtn: !this.state.allCheckedBtn,
                    });
                  }}
                  activeOpacity={1}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    {this.state.allCheckedBtn ? (
                      <Image
                        source={radio_btn_checked}
                        style={{
                          width: 18,
                          height: 18,
                        }}
                      />
                    ) : (
                      <View
                        style={{
                          backgroundColor: '#b0b0b0',
                          width: 18,
                          height: 18,
                          borderRadius: 9,
                        }}
                      />
                    )}
                    <Text style={{marginLeft: 4}}>全部</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'column'}}>
                <View>
                  <Text>合计:{this.totalPrice()}</Text>
                </View>
                <View>
                  <Text>优惠合计</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity onPress={() => null} activeOpacity={1}>
                  <View
                    style={{
                      width: 100,
                      height: 36,
                      backgroundColor: '#ff6a6a',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 14}}>领券结算</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 400,
    height: 400,
    backgroundColor: 'black',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});
