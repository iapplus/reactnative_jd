import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
  RefreshControl,
  NativeModules,
  ScrollView,
} from 'react-native';
import {width} from '../tools/help';
import {get} from '../tools/request';
import Placeholder from '../components/Placeholder';
import {buy_car, jd_logo} from '../icons/images';
import {ShopTag} from '../components/ShopTag';

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

export default class SearchPage extends React.Component {
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
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  componentDidMount(): void {
    this.refs['searchInput'].focus();
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
    this.initPage();
  };

  //初始化第一页
  initPage() {
    this.setState({
      refreshing: true,
    });
    get('http://127.0.0.1/api/main', 'page=1')
      .then(response => {
        this.setState({
          data: response.data,
          currentPage: response.current_page,
          totalPage: response.last_page,
          isEnd: false,
          refreshing: false, //加载完成后，修改下拉刷新状态
        });
      })
      .catch(e => {
        this.setState({
          refreshing: false,
        });
      });
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

  setSearchValue = obj => {
    this.setState({
      searchValue: obj,
    });
    console.log('as');
    this.refs.searchInput.value = 'sasa';
  };

  render() {
    return (
      <SafeAreaView style={styles.body}>
        <View>
          <View
            style={Platform.OS === 'android' ? {width: width, height: 10} : ''}
          />
          <View style={{flexDirection: 'row', display: 'flex'}}>
            <View style={styles.searchBar}>
              <Image
                source={require('../icons/search.png')}
                style={{width: 18, height: 18, marginTop: 12, marginLeft: 10}}
              />
              <TextInput
                underlineColorAndroid={'transparent'}
                autoFocus={false}
                ref={'searchInput'}
                on
                placeholder={'搜索'}
                defaultValue={this.state.searchValue}
                style={{flex: 1, paddingLeft: 10, color: 'black', fontSize: 12}}
                onChangeText={text => this.setState({searchValue: text})}
              />
              <Image
                source={require('../icons/camera.png')}
                style={{width: 20, height: 20, marginTop: 10, marginRight: 10}}
              />
            </View>
            <TouchableOpacity onPress={this.goBack}>
              <Text style={{color: '#7e7e7e', marginTop: 10, marginLeft: 10}}>
                取消
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 24,
              width: width,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18}}>搜索历史</Text>
              <Image
                source={require('../icons/delete.png')}
                style={{width: 20, height: 20}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              {['三只松鼠', 'iphone', '三星', 'switch'].map((obj, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.setSearchValue(obj)}>
                    <View
                      key={index}
                      style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginRight: 5,
                        borderRadius: 14,
                        height: 28,
                        justifyContent: 'center',
                        backgroundColor: '#efefef',
                      }}>
                      <Text style={{fontSize: 12, color: '#606060'}}>
                        {obj}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{marginTop: 10}}>
              <Text>热门推荐</Text>
            </View>
          </View>

          <FlatList
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
                onRefresh={() => {
                  this._onRefresh();
                }}
              />
            }
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
