import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import {width} from '../tools/help';
import {get} from '../tools/request';
import Placeholder from '../components/Placeholder';
import {buy_car, jd_logo} from '../icons/images';
import {ShopTag} from '../components/ShopTag';

// import React from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     StatusBar,
//     RefreshControl,
//     Text,
//     View, Image,
// } from 'react-native';
// import {height, width} from '../tools/help';
// import {buy_car, jd_logo} from '../icons/images';
// import {ShopTag} from '../components/ShopTag';
// import DropdownMenu from 'react-native-dropdown-menu';
//
//
// export default class Tab1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: '',
//             pullRefreshThrottle: -90,
//             pullRefreshText: '下拉刷新',
//             isRefreshing: false,
//         };
//     }
//
//     static defaultProps = {
//         navigation: {},
//     };
//     cell = {
//         width: (width - 16) / 3 - 4,
//     };
//
//     onScrollListener(e) {
//         console.log(e.nativeEvent.contentOffset.y&&!this.state.isRefreshing);
//         if (e.nativeEvent.contentOffset.y < this.state.pullRefreshThrottle&&!this.state.isRefreshing) {
//             this.setState({
//                 pullRefreshText: '松开刷新',
//             });
//         }
//
//         if (e.nativeEvent.contentOffset.y < this.state.pullRefreshThrottle&&this.state.isRefreshing) {
//             this.setState({
//                 pullRefreshText: '刷新中',
//             });
//         }
//         if (e.nativeEvent.contentOffset.y===0){
//             this.setState({
//                 pullRefreshText: '下拉刷新',
//             });
//         }
//     }
//
//     onRefresh = () => {
//         console.log(this.state.isRefreshing)
//         console.log("OnRefresh...")
//         this.setState({
//             pullRefreshText: '刷新中',
//             isRefreshing: true
//         });
//         //间隔5秒结束下拉刷新
//         setTimeout(()=>{
//             //.concat拼接字符串，数组
//             // let rowData = Array.from(new Array(10)).map((val, i)=>({
//             //     text: 'Loaded row' + (+this.state.loaded + i),
//             //     clicks: 0
//             // }))
//                 // .concat(this.state.rowData);
//             this.setState({
//                 // loaded: this.state.loaded + 10,
//                 isRefreshing: false,
//                 pullRefreshText: '刷新完成',
//                 // rowData: rowData
//             })
//         }, 3000);
//     };
//
//     render() {
//         var data = [['C', 'Java', 'JavaScript', 'PHP'], ['Python', 'Ruby'], ['Swift', 'Objective-C']];
//         return (
//             <>
//                 <StatusBar barStyle="dark-content"/>
//                 <SafeAreaView>
//                     <ScrollView refreshControl={
//                         <RefreshControl refreshing={this.state.isRefreshing}
//                                         onRefresh={this.onRefresh}
//                                         tintColor="#444444"
//                                         title="Loading..."
//                                         titleColor="#fffff"
//                         />} scrollEventThrottle={40}
//                                 showsVerticalScrollIndicator={false}
//                                 showsHorizontalScrollIndicator={false}
//                                 contentInsetAdjustmentBehavior="automatic"
//                                 onScroll={(event) => this.onScrollListener(event)}
//                                 style={{backgroundColor: '#f1f1f1', height: height}}>
//
//                         <View style={{
//                             width: width,
//                             height: 80,
//                             position: 'absolute',
//                             marginTop: -80,
//                             justifyContent:'center',
//                             alignItems:'center'
//                         }}>
//                             <Text>
//                                 {this.state.pullRefreshText}
//                             </Text>
//                         </View>
//                         <View style={{
//                             position: 'absolute',
//                             marginTop: 45,
//                             display: 'flex',
//                             flexDirection: 'row',
//                             flexWrap: 'wrap',
//                             paddingLeft: 8,
//                             paddingRight: 8,
//                             justifyContent: 'space-between',
//                         }}>
//                             {
//                                 [
//                                     {id: 1, tag: 1, shop_name: '特伦舒特伦舒特伦舒特', shop_image: jd_logo, price: 299.0},
//                                     {id: 2, tag: 2, shop_name: '特伦舒', shop_image: jd_logo, price: 299.01},
//                                     {id: 3, tag: 0, shop_name: '特伦舒', shop_image: jd_logo, price: 299.02},
//                                     {id: 4, tag: 9, shop_name: '特伦舒', shop_image: jd_logo, price: 299.44},
//                                 ].map((obj, index) => {
//                                     return (
//
//                                         <View key={index} style={{
//                                             width: this.cell.width,
//                                             height: 190,
//                                             flexDirection: 'column',
//                                             marginTop: 5,
//                                             paddingBottom: 8,
//                                             backgroundColor: '#ffffff',
//                                             borderRadius: 8,
//                                         }}>
//                                             <View style={{
//                                                 justifyContent: 'center',
//                                                 alignItems: 'center',
//                                                 paddingLeft: 8,
//                                                 paddingRight: 8,
//                                             }}>
//                                                 <Image source={obj.shop_image} style={{
//                                                     width: this.cell.width - 20,
//                                                     height: 120,
//                                                     resizeMode: 'contain',
//                                                 }}/>
//                                             </View>
//                                             <View style={{
//                                                 paddingLeft: 8,
//                                                 paddingRight: 8,
//                                                 flexDirection: 'column',
//                                                 height: 30,
//                                             }}>
//                                                 <ShopTag index={obj.tag} shopName={obj.shop_name}/>
//                                             </View>
//                                             <View style={{
//                                                 flexDirection: 'row',
//                                                 justifyContent: 'space-between',
//                                                 alignItems: 'center',
//                                                 paddingLeft: 8,
//                                                 paddingRight: 8,
//                                                 marginTop: 8,
//                                             }}>
//                                                 <Text style={{fontSize: 18, color: 'red'}}>
//                                                     ¥{obj.price}{(obj.price + '').indexOf('.') === -1 ? '.00' : ''}
//                                                 </Text>
//                                                 <Image source={buy_car} style={{
//                                                     width: 22,
//                                                     height: 22,
//                                                     resizeMode: 'contain',
//                                                 }}/>
//                                             </View>
//                                         </View>
//                                     );
//                                 })
//                             }
//                         </View>
//                         <DropdownMenu
//                             style={{flex: 1, position: 'absolute'}}
//                             bgColor={'white'}
//                             tintColor={'#666666'}
//                             activityTintColor={'green'}
//                             // arrowImg={}
//                             // checkImage={}
//                             // optionTextStyle={{color: '#333333'}}
//                             // titleStyle={{color: '#333333'}}
//                             // maxHeight={300}
//                             handler={(selection, row) => this.setState({text: data[selection][row]})}
//                             data={data}
//                         >
//                             <View style={{flex: 1}}>
//                                 <Text>
//                                     {this.state.text} is the best language in the world
//                                 </Text>
//                             </View>
//                         </DropdownMenu>
//                     </ScrollView>
//                 </SafeAreaView>
//             </>
//         );
//     }
// }

const ListHeaderComponent = () => (
  <View>
    <Text>header</Text>
  </View>
);
const ListEmptyComponent = () => <Placeholder type={'noNetwork'} />;
//
const ListFooterComponent = (loadState, dataLength) => {
  if (loadState) {
    return (
      <View>
        <Text style={{textAlign: 'center'}}>------我是有底线的------</Text>
      </View>
    );
  } else {
    if (dataLength === 0) {
      return <></>;
    } else {
      return (
        <View>
          <Text style={{textAlign: 'center'}}>加载更多</Text>
        </View>
      );
    }
  }
};
const ItemSeparatorComponent = () => (
  <View style={{width: width, height: 2}}></View>
);

export default class Tab1 extends React.Component {
  static defaultProps = {name: '小鸣'};

  cell = {
    width: (width - 16) / 3,
  };

  // static propTypes={
  //     name: PropTypes.string
  //     , age: PropTypes.number
  //     , sex: PropTypes.string.isRequired }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: [], //FlatList数据
      currentPage: 0, //当前页码
      totalPage: 0, //总页数
      isEnd: false, //底部标示

      searchValue: '',

      pullRefreshThrottle: -80,
      pullRefreshText: '下拉刷新',
      pullRefreshContentOffsetY: 0,
      isRefreshing: false,
      beforeRefresh: true,
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  componentDidMount(): void {
    this.initPage();
    // NativeModules.ToastForAndroid.show(1000);
    // console.log(NativeModules.ToastForAndroid.name);

    // NativeModules.ToastForAndroid.findEvents((error, events) => {
    //     if (error) {
    //         console.error(error);
    //     } else {
    //         console.log(events);
    //     }
    // });
  }

  _onRefresh = () => {
    this.setState({
      pullRefreshText: '刷新中',
      refreshing: true,
      beforeRefresh: false,
    });
    this.initPage();
  };

  //初始化第一页
  initPage() {
    // this.setState({
    //     refreshing: true,
    // });

    //间隔5秒结束下拉刷新
    setTimeout(() => {
      //.concat拼接字符串，数组
      // let rowData = Array.from(new Array(10)).map((val, i)=>({
      //     text: 'Loaded row' + (+this.state.loaded + i),
      //     clicks: 0
      // }))
      // .concat(this.state.rowData);
      this.setState({
        // loaded: this.state.loaded + 10,
        pullRefreshText: '刷新完成',
        // rowData: rowData
      });
      var that = this;
      setTimeout(function () {
        that.setState({
          refreshing: false,
        });
      }, 1000);
    }, 2000);
    // get('http://127.0.0.1/api/main', 'page=1').then(response => {
    //     this.setState({
    //         data: response.data,
    //         currentPage: response.current_page,
    //         totalPage: response.last_page,
    //         isEnd: false,
    //         refreshing: false,//加载完成后，修改下拉刷新状态
    //     });
    // }).catch(e => {
    //     this.setState({
    //         refreshing: false,
    //     });
    // });
  }

  _onEndReached = () => {
    console.log('onEndReached', this.state.currentPage, this.state.totalPage);
    if (this.state.isEnd) {
      console.log('到底了，不继续网络请求了!');
      return;
    }
    if (this.state.currentPage === this.state.totalPage) {
      this.setState({
        isEnd: true,
      });
      console.log('到底部了');
    }

    get('http://127.0.0.1/api/main', `page=${this.state.currentPage + 1}`)
      .then(response => {
        console.log(`第${this.state.currentPage}页`);
        this.setState({
          data: this.state.data.concat(response.data),
          currentPage: this.state.currentPage + 1,
          totalPage: response.last_page,
        });
      })
      .catch(e => {});
  };

  renderItem = obj => {
    return (
      <View
        style={{
          width: this.cell.width,
          height: 190,
          flexDirection: 'column',
          marginTop: 5,
          paddingBottom: 8,
          padding: 2,
        }}>
        <View
          style={{
            height: 190,
            backgroundColor: '#ffffff',
            borderRadius: 4,
            borderColor: '#e3e3e3',
            borderWidth: 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 8,
              paddingRight: 8,
            }}>
            <Image
              source={obj.shop_image}
              style={{
                width: this.cell.width - 20,
                height: 120,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              paddingLeft: 8,
              paddingRight: 8,
              flexDirection: 'column',
              height: 30,
            }}>
            <ShopTag index={obj.tag} shopName={obj.shop_name} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 8,
              paddingRight: 8,
              marginTop: 8,
            }}>
            <Text style={{fontSize: 18, color: 'red'}}>
              ¥{obj.price}
              {(obj.price + '').indexOf('.') === -1 ? '.00' : ''}
            </Text>
            <Image
              source={buy_car}
              style={{
                width: 22,
                height: 22,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  _keyExtractor = (item, index) => item.id;

  onScrollListener(e) {
    // this.refs.PULLREFRESH.setNativeProps({
    //     marginTop: -e.nativeEvent.contentOffset.y - 80,
    // });
    // console.log(e.nativeEvent.contentOffset.y , this.state.pullRefreshThrottle)
    if (
      e.nativeEvent.contentOffset.y < this.state.pullRefreshThrottle &&
      this.state.beforeRefresh
    ) {
      this.setState({
        pullRefreshText: '松开刷新',
      });
    }
    if (e.nativeEvent.contentOffset.y === 0 && !this.state.beforeRefresh) {
      this.setState({
        pullRefreshText: '下拉刷新',
        beforeRefresh: true,
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.body}>
        <View>
          <View
            ref={'PULLREFRESH'}
            style={{
              width: width,
              height: 80,
              position: 'absolute',
              marginTop: 0,
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              // backgroundColor:'red'
            }}>
            <Text>{this.state.pullRefreshText}</Text>
          </View>
          <FlatList
            onScroll={e => this.onScrollListener(e)}
            numColumns={3}
            style={{
              width: width,
              height: 500,
              paddingLeft: 8,
              paddingRight: 8,
              display: 'flex',
            }}
            // data={this.state.data}
            data={[
              {
                id: 1,
                tag: 1,
                shop_name: '特伦舒特伦舒特伦舒特',
                shop_image: jd_logo,
                price: 299.0,
              },
              {
                id: 2,
                tag: 2,
                shop_name: '特伦舒',
                shop_image: jd_logo,
                price: 299.01,
              },
              {
                id: 3,
                tag: 0,
                shop_name: '特伦舒',
                shop_image: jd_logo,
                price: 299.02,
              },
              {
                id: 4,
                tag: 9,
                shop_name: '特伦舒',
                shop_image: jd_logo,
                price: 299.44,
              },
            ]}
            keyExtractor={this._keyExtractor}
            onEndReached={this._onEndReached}
            refreshing={false}
            renderItem={({item}) => this.renderItem(item)}
            // ItemSeparatorComponent={ItemSeparatorComponent()}
            ListEmptyComponent={ListEmptyComponent()}
            // ListFooterComponent={ListFooterComponent(this.state.isEnd, this.state.data.length)}
            onEndReachedThreshold={0.3}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor={'#8d9cff'}
                tintColor="#ffffff"
                title="Loading..."
                titleColor="#ffffff"
                onRefresh={() => {
                  this._onRefresh();
                }}
              />
            }
            onTouchEnd={() => {
              console.log('手指抬起来了');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    marginLeft: 20,
    width: width - 80,
    height: 40,
    backgroundColor: '#EFEFEF',
    borderRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
});
