import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CategorySearchBar} from '../../components/CateagorySearchBar';
import {width} from '../../tools/help';
import {category_banner_1} from '../../icons/images';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    //暗黑模式判断
    this.state = {
      data: [
        [
          {
            title: '休闲零食',
            secondCategory: [
              {
                id: 1,
                subTitle: '巧克力',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '休闲零食',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '膨化食品',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '肉干肉铺',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '饼干蛋糕',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
          {
            title: '中外名酒',
            secondCategory: [
              {
                id: 1,
                subTitle: '白酒',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '葡萄酒',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '洋酒',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '啤酒',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '养生黄酒',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '陈年老酒',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
          {
            title: '京东生鲜',
            secondCategory: [
              {
                id: 1,
                subTitle: '新鲜水果🥝',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '海鲜水产🦐',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '精选肉类🐷',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '蛋类🥚',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '新鲜蔬菜🥬',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '速冻食品🥟',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '乳品冷饮🥛',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '大闸蟹🦀️',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '芒果🥭',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
        ],
        [
          {
            title: '热门精选',
            secondCategory: [
              {
                id: 1,
                subTitle: '好物种草',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '排行榜',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '新品上新',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
          {
            title: '特色馆区',
            secondCategory: [
              {
                id: 1,
                subTitle: '日本馆',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '韩国馆',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '美国馆',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
          {
            title: '母婴玩具',
            secondCategory: [
              {
                id: 1,
                subTitle: '婴儿奶粉',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '婴儿玩具',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '休闲零食',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '婴儿辅食',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '孕妇奶粉',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '婴儿洗护',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '婴儿营养',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
        ],
        [
          {
            title: '热门分类',
            secondCategory: [
              {
                id: 1,
                subTitle: '设计师电脑',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '游戏本',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '轻薄本',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '游戏台式机',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '机械键盘',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '移动硬盘',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
          {
            title: '电脑整机',
            secondCategory: [
              {
                id: 1,
                subTitle: '笔记本',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '游戏本',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '台式机',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '一体机',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '服务器',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '平板电脑',
                imgUrl: require('../../images/iphone.jpg'),
              },
              {
                id: 1,
                subTitle: '二合一平板',
                imgUrl: require('../../images/iphone.jpg'),
              },
            ],
          },
        ],
      ],
      currentPage: 0,
      firstCategory: [
        {name: '推荐分类', selected: true},
        {name: '京东超市', selected: false},
        {name: '电脑办公', selected: false},
        {name: '国际名牌', selected: false},
        {name: '奢侈品', selected: false},
        {name: '京东国际', selected: false},
        {name: '唯品会', selected: false},
        {name: '男装', selected: false},
        {name: '女装', selected: false},
        {name: '男鞋', selected: false},
        {name: '女鞋', selected: false},
        {name: '推荐分类', selected: false},
        {name: '推荐分类', selected: false},
      ],
    };
  }

  changeCategoryStatus = index => {
    const data = this.state.firstCategory;
    for (let i = 0; i < this.state.firstCategory.length; i++) {
      data[i].selected = false;
    }
    data[index].selected = true;
    this.setState({
      firstCategory: data,
      currentPage: index,
    });
  };

  render() {
    return (
      <>
        <StatusBar
          // animated={true}
          //        hidden={false}
          //        backgroundColor={'white'}
          //        translucent={false}
          barStyle={'dark-content'}
          // showHideTransition={'fade'}
          // networkActivityIndicatorVisible={true}
        />

        <SafeAreaView style={{backgroundColor: '#F3F3F3'}}>
          <CategorySearchBar />
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
            {/*左边*/}
            <View style={{width: 100}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{backgroundColor: '#f7f7f7'}}
                contentInsetAdjustmentBehavior="automatic">
                <View
                  style={{height: this.state.firstCategory.length * 60 + 82}}>
                  {this.state.firstCategory.map((obj, index) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={1}
                        key={index}
                        onPress={() => this.changeCategoryStatus(index)}>
                        <View
                          style={
                            obj.selected
                              ? {
                                  backgroundColor: 'white',
                                  height: 60,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }
                              : {
                                  backgroundColor: '#F3F3F3',
                                  height: 60,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }
                          }>
                          {obj.selected ? (
                            <View
                              style={{
                                position: 'absolute',
                                width: 4,
                                height: 30,
                                marginTop: 15,
                                right: 0,
                                backgroundColor: 'red',
                              }}
                            />
                          ) : (
                            <></>
                          )}
                          <Text
                            style={{
                              color: obj.selected ? 'red' : 'black',
                              // lineHeight: 60,
                              // fontWeight: '200',
                            }}>
                            {obj.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            {/*右边*/}
            <View>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{
                  width: width - 100,
                  padding: 10,
                  backgroundColor: 'white',
                }}>
                <CategoryPage data={this.state.data[this.state.currentPage]} />
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

//商品分类Cell
const CategoryCell = (id, name, imageUrl, index) => {
  return (
    <View style={{display: 'flex', flexDirection: 'column'}} key={index}>
      <View
        style={{width: (width - 100 - 20) / 3, height: 100, paddingTop: 20}}>
        <Image
          source={require('../../images/iphone.jpg')}
          style={{width: 70, height: 70, marginLeft: 15}}
        />
      </View>
      <Text style={{textAlign: 'center', fontWeight: '300'}}>{name}</Text>
    </View>
  );
};
//二级分类页
const CategoryPage = ({data}) => {
  if (data === undefined) {
    return <></>;
  }
  return (
    <View style={{}}>
      <Image
        source={category_banner_1}
        style={{width: width - 100 - 20, height: 100}}
        resizeMode="cover"
      />
      <View>
        {data.map((obj, index) => {
          return (
            <View key={index} style={{marginTop: 20}}>
              <Text style={{fontSize: 14}}>{obj.title}</Text>
              <View
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}>
                {obj.secondCategory.map((o, index) => {
                  return (
                    // <View>
                    //     <Text>
                    //         99{o.id}
                    //     </Text>
                    // </View>
                    CategoryCell(o.id, o.subTitle, o.imgUrl, index)
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
