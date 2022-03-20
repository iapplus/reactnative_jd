import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {msg, rightArrow} from '../icons/images';
import {height, width} from '../tools/help';
import {Toast} from '../components/PokerModal';
import construct from '@babel/runtime/helpers/esm/construct';

export default class SettingsPage extends React.Component {
  static defaultProps = {
    navigation: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.dataItems = [
      [
        {title: '地址管理', subtitle: ''},
        {title: '账户安全', subtitle: '账户保障可升级'},
        {title: 'plus会员', subtitle: '您有4张运费券待使用'},
      ],
      [
        {title: '功能反馈', subtitle: ''},
        {
          title: '关于京东APP',
          subtitle: 'v1.0.0',
          clickEvent: () => {
            this.setState({
              modalVisible: true,
            });
          },
        },
      ],
      [
        {
          title: '退出登陆',
          subtitle: '',
          clickEvent: () => {
            this.props.navigation.push('LoginPage', {
              name: '',
            });
          },
        },
      ],
    ];
  }

  //
  exit = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          style={{height: height}}
          // scrollEnabled={false}
        >
          <Toast
            context={this}
            modalVisible={this.state.modalVisible}
            msg={this.dataItems[1][1].subtitle}
          />
          {/*<TouchableOpacity activeOpacity={1} onPress={() => this.exit()}>*/}
          {/*    <View style={{height: 48, justifyContent: 'center', paddingLeft: 18, backgroundColor: 'white'}}>*/}
          {/*        <Text>退出</Text>*/}
          {/*    </View>*/}
          {/*</TouchableOpacity>*/}

          {this.dataItems.map((group, index) => {
            return group.map((obj, i) => {
              return (
                <TouchableOpacity
                  key={index + '-' + i}
                  activeOpacity={1}
                  onPress={obj.clickEvent}>
                  <View>
                    <View style={styles.cell}>
                      <Text key={index}>{obj.title}</Text>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          key={index}
                          style={{color: '#868585', fontSize: 12}}>
                          {obj.subtitle}
                        </Text>
                        <Image
                          source={rightArrow}
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </View>
                    </View>
                    {group.length - 1 > i && group.length > 1 ? (
                      <View
                        style={{
                          backgroundColor: '#ececec',
                          width: Dimensions.get('window').width,
                          height: 1,
                        }}
                      />
                    ) : (
                      <View
                        style={{
                          width: Dimensions.get('window').width,
                          height: 20,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            });
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 18,
    paddingRight: 18,
    width: width,
  },
});
