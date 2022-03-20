import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {height, width} from '../../tools/help';
import {
  paper,
  iphone,
  nintendoswitch,
  shoes,
  orange,
  kouhong,
  bag,
  makeup,
  cloth,
  electronic,
  market,
  fresh,
  plusVip,
  wph,
  home_invite_left,
  home_invite_right,
  newCard,
  dot9,
} from '../../icons/images';
import {HomePageSwiper} from '../../components/ISwiper';
import LottieView from 'lottie-react-native';
import TestEmitter from '../../events/TestEvent';
import {Toast} from '../../components/PokerModal';

export default class MainTabChild extends React.Component {
  static defaultProps = {
    navigation: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      swiperScroll: true,
      modalVisible: false,
      modalVisibleTips: '',
    };
  }

  componentDidMount() {
    this.animation.play();
    TestEmitter.addListener('ws_1', val => {
      console.log('首页接收到websocket消息', JSON.parse(val).msg);
      if (JSON.parse(val).msg == 1) {
        this.setState({
          modalVisible: true,
          modalVisibleTips: JSON.parse(val).msg + '',
        });
      }
    });
  }
  onScrollBeginDrag = () => {
    this.setState({
      swiperScroll: false,
    });
  };

  onScrollEndDrag = e => {
    // this.refs['myScrollView'].scrollTo({ x: 0, y: py, animated: true });
    // console.log('end', e.nativeEvent.contentOffset);
    this.setState({
      swiperScroll: true,
    });
  };

  render() {
    return (
      <View>
        <View
          style={{
            width: width,
            height: 80,
            backgroundColor: 'red',
            position: 'absolute',
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80,
          }}
        />
        <Toast
          context={this}
          modalVisible={this.state.modalVisible}
          msg={this.state.modalVisibleTips}
        />
        <ScrollView
          style={{width: width, height: 1900, flex: 1}}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{height: 145}}>
            <HomePageSwiper
              images={[
                {imageSrc: require('../../banners/a.jpg')},
                {imageSrc: require('../../banners/b.jpg')},
                {imageSrc: require('../../banners/c.jpg')},
              ]}
              state={this.state.swiperScroll}
            />
          </View>
          <View
            style={{
              paddingBottom: 8,
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: 'white',
              width: width - 20,
              marginLeft: 10,
            }}>
            <View style={styles.iconmenu}>
              {[
                {src: market, name: '超市'},
                {src: fresh, name: '生鲜'},
                {src: cloth, name: '服饰'},
                {src: electronic, name: '数码'},
                {src: wph, name: '唯品会'},
              ].map((info, index) => {
                return <MenuCell index={index} cell={info} context={this} />;
              })}
            </View>
            <View style={styles.iconmenu}>
              {[
                {src: plusVip, name: 'Plus会员',path:'MarketPage'},
                {src: dot9, name: '9.9元拼',path:'RefreshPageTest'},
                {src: cloth, name: '服饰'},
                {src: electronic, name: '数码'},
                {src: makeup, name: '美妆'},
              ].map((info, index) => {
                return <MenuCell index={index} cell={info} context={this} />;
              })}
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {[home_invite_left, home_invite_right].map((obj, index) => {
              let w = (width - 20) / 2;
              let h = w / 1.5;
              return (
                <Image
                  source={obj}
                  style={{width: w, height: h}}
                  resizeMode="cover"
                />
              );
            })}
          </View>
          <Image
            source={newCard}
            style={{
              width: width - 20,
              height: (width - 20) / 7.5,
              marginLeft: 10,
              marginTop: 10,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              marginTop: 10,
              width: width - 20,
              height: 2100,
              backgroundColor: 'white',
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <FlashSellCell name={'京东秒杀'} />
            <LiveCell title={'京东直播'} subtitle={'有趣有料'} />
            <DailyCheapAndRanker
              title={['每日特价', '排行榜']}
              subtitle={['寻源湖北', '跟榜购好物']}
              shops={[shoes, orange]}
            />
            <FindUltrafine title={'发现好货'} subtitle={'美好新生活'} />
            <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
              <Text>
                <LottieView
                  style={{width: 100, height: 100}}
                  ref={animation => {
                    this.animation = animation;
                  }}
                  source={require('../../animation_icon/test.json')}
                  autoPlay
                  loop
                />
                ;
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const MenuCell = ({cell, context, index}) => (
  <View style={styles.menuItem} key={index}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        context.props.navigation.push('Root',{screen:cell.path})
        console.log("OK",cell.path)
      }}>
      <View style={styles.menuItemText}>
        <Image source={cell.src} style={styles.menuItemIcon} />
        <Text style={{marginTop: 6, fontSize: 14}}>{cell.name}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const FlashSellCell = ({name}) => (
  <View
    style={{
      width: (width - 20) / 2,
      height: 150,
      display: 'flex',
      flexDirection: 'column',
    }}>
    <View style={{display: 'flex', flexDirection: 'row', paddingTop: 14}}>
      <Text
        style={{
          marginLeft: 5,
          fontSize: 14,
          fontFamily: 'Cochin',
        }}>
        {name}
      </Text>
      <View
        style={{
          width: 50,
          height: 20,
          backgroundColor: 'red',
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          marginLeft: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 12,
            marginLeft: 2,
            lineHeight: 16,
          }}>
          12点场
        </Text>
      </View>
      <View
        style={{
          width: 45,
          height: 20,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'red',
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'red',
            fontSize: 8,
            lineHeight: 16,
          }}>
          12:00:00
        </Text>
      </View>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
      }}>
      {[1, 2, 3].map(function (obj, index) {
        return (
          <View key={index}>
            <Image source={paper} style={{width: 50, height: 50}} />
            <Text style={{marginTop: 5, textAlign: 'center', fontSize: 16}}>
              ¥99.9
            </Text>
            <Text
              style={{
                marginTop: 3,
                textAlign: 'center',
                textDecorationLine: 'line-through',
                color: 'grey',
                fontSize: 12,
              }}>
              ¥49.9
            </Text>
          </View>
        );
      })}
    </View>
  </View>
);
//首页直播板块
const LiveCell = ({title, subtitle}) => (
  <View
    style={{
      width: (width - 20) / 2,
      height: 150,
      display: 'flex',
      flexDirection: 'column',
    }}>
    <View>
      <Text
        style={{
          marginTop: 14,
          fontSize: 14,
          fontFamily: 'Cochin',
          color: 'purple',
        }}>
        {title}
      </Text>
    </View>
    <View>
      <Text style={{color: 'pink', marginTop: 6}}>{subtitle}</Text>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
      }}>
      {[iphone, nintendoswitch].map(function (obj, index) {
        return (
          <View key={index}>
            <Image source={obj} style={{width: 75, height: 75}} />
          </View>
        );
      })}
    </View>
  </View>
);
//每日特价与排行榜
const DailyCheapAndRanker = ({title, subtitle, shops}) => (
  <View
    style={{
      width: (width - 20) / 2,
      height: 150,
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 5,
    }}>
    {title.map(function (obj, index) {
      return (
        <View key={index} style={{width: (width - 20) / 2 / 2}}>
          <Text
            style={{
              marginTop: 14,
              fontSize: 14,
              fontFamily: 'Cochin',
            }}>
            {title[index]}
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 12,
              color: 'purple',
            }}>
            {subtitle[index]}
          </Text>
          <Image source={shops[index] + ''} style={{width: 75, height: 75}} />
        </View>
      );
    })}
  </View>
);
//发现好货
const FindUltrafine = ({title, subtitle}) => (
  <View
    style={{
      width: (width - 20) / 2,
      height: 150,
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 5,
    }}>
    <View>
      <Text
        style={{
          marginTop: 14,
          fontSize: 14,
          fontFamily: 'Cochin',
        }}>
        {title}
      </Text>
    </View>
    <View>
      <Text style={{color: 'aqua', marginTop: 6}}>{subtitle}</Text>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
      }}>
      {[bag, kouhong].map(function (obj, index) {
        return (
          <View key={index}>
            <Image source={obj} style={{width: 75, height: 75}} />
          </View>
        );
      })}
    </View>
  </View>

);

const styles = StyleSheet.create({
  menuItemIcon: {
    width: 36,
    height: 36,
  },
  iconmenu: {
    // width: width,
    backgroundColor: 'white',
    // borderRadius: 10,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 40) / 5,
    height: 55,
    // backgroundColor: 'green'
  },
  menuItemText: {
    width: (width - 40) / 5,
    // backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    borderRadius: 20,
    height: 200,
  },
  slide: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    height: Dimensions.get('window').height,
  },
});
