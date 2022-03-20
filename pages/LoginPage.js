import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {height, width} from '../tools/help';
import {close, jd_logo, msg, qq_login, wechat_login} from '../icons/images';
import {HTTP_Login} from '../tools/apis';
import {Toast} from '../components/PokerModal';
import {NetworkInfo} from 'react-native-network-info';

const Line = ({}) => (
  <View
    style={{
      flex: 1,
      height: 1,
      backgroundColor: '#d4d4d4',
    }}
  />
);
const TitleBar = ({clickEvent}) => (
  <View
    style={{
      width: width,
      height: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 18,
      paddingRight: 18,
    }}>
    <TouchableOpacity onPress={() => clickEvent()} activeOpacity={1}>
      <Image
        source={close}
        style={{
          width: 16,
          height: 16,
        }}
      />
    </TouchableOpacity>
    <View>
      <Text>帮助</Text>
    </View>
  </View>
);
const Input = ({ph, onChangeText, isPassword}) => (
  <TextInput
    placeholder={ph}
    secureTextEntry={isPassword}
    style={{flex: 1, height: 40, color: 'black'}}
    placeholderTextColor={'grey'}
    keyboardType="phone-pad"
    onChangeText={text => onChangeText(text)}></TextInput>
);

const LargeButton = ({title, clickEvent}) => (
  <TouchableOpacity onPress={() => clickEvent()} activeOpacity={1}>
    <View
      style={{
        width: width - 100,
        height: 52,
        backgroundColor: '#ff6a6a',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 24}}>{title}</Text>
    </View>
  </TouchableOpacity>
);
//文字按钮：无样式
const TextButton = ({clickEvent, text}) => {
  return (
    <TouchableOpacity onPress={() => clickEvent()} activeOpacity={1}>
      <Text style={{color: '#6b6b6b'}}>{text}</Text>
    </TouchableOpacity>
  );
};

//苹果登陆
const AppleLogin = () => {
  return (
    <View
      style={{
        width: width - 200,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>通过Apple登陆</Text>
    </View>
  );
};

class MMMM extends React.Component {
  constructor(props) {
    super(props);
    NetworkInfo.getIPAddress().then(ipAddress => {
      console.log(ipAddress);
    });

    // Get IPv4 IP (priority: WiFi first, cellular second)
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      console.log(ipv4Address);
    });

    // Get Broadcast
    NetworkInfo.getBroadcast().then(broadcast => {
      console.log(broadcast);
    });

    // Get SSID
    NetworkInfo.getSSID().then(ssid => {
      console.log(ssid);
    });

    // Get BSSID
    NetworkInfo.getBSSID().then(bssid => {
      console.log(bssid);
    });

    // Get Subnet
    NetworkInfo.getSubnet().then(subnet => {
      console.log(subnet);
    });

    // Get Default Gateway IP
    NetworkInfo.getGatewayIPAddress().then(defaultGateway => {
      console.log(defaultGateway);
    });

    // Get frequency (supported only for Android)
    NetworkInfo.getFrequency().then(frequency => {
      console.log(frequency);
    });
  }

  componentDidMount() {
    console.log('夫类');
  }
}

export default class LoginPage extends MMMM {
  static defaultProps = {
    navigation: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      modalVisible: false,
      modalVisibleTips: '',
    };
  }

  forgetPassword = () => {
    console.log('忘记密码');
  };
  showSuccess = () => {
    this.setState({
      modalVisible: true,
      modalVisibleTips: '登录成功',
    });
  };
  showFailed = tips => {
    this.setState({
      modalVisible: true,
      modalVisibleTips: tips,
    });
  };

  login = () => {
    let account = this.state.account;
    let password = this.state.password;
    if (account === '' || password === '') {
      this.showFailed('账号或密码不能为空');
      return;
    }
    HTTP_Login({account: account, password: password})
      .then(response => {
        this.showSuccess(response.info);
      })
      .catch(e => {
        this.showFailed();
        // console.log(e);
      });
  };

  render() {
    return (
      <>
        <SafeAreaView style={{backgroundColor: 'white'}}>
          <ScrollView
            style={{backgroundColor: 'white', height: height}}
            scrollEnabled={false}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <TitleBar clickEvent={() => this.props.navigation.pop()} />
              <Toast
                context={this}
                modalVisible={this.state.modalVisible}
                msg={this.state.modalVisibleTips}
              />

              <View
                style={{
                  width: width,
                  height: 180,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={jd_logo}
                  style={{
                    width: 80,
                    height: 100,
                    resizeMode: 'contain',
                  }}
                />
                <View>
                  <Text style={{fontSize: 12, color: '#808080'}}>
                    正品低价有保障，好货好物上京东
                  </Text>
                </View>
              </View>
              <View style={{paddingLeft: 32, paddingRight: 32, marginTop: 20}}>
                <Input
                  ph={'用户名/邮箱/手机号'}
                  onChangeText={text => {
                    this.setState({
                      account: text,
                    });
                  }}
                />
                <Line />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Input
                    isPassword={true}
                    ph={'密码'}
                    onChangeText={text => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />
                  <Image
                    source={msg}
                    style={{
                      width: 12,
                      height: 12,
                    }}
                  />
                  <View
                    style={{
                      width: 1,
                      height: 20,
                      backgroundColor: '#1c1c1c',
                      marginRight: 12,
                      marginLeft: 12,
                    }}></View>
                  <TextButton
                    clickEvent={this.forgetPassword}
                    text={'忘记密码'}
                  />
                </View>
                <Line />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <LargeButton title={'登 陆'} clickEvent={this.login} />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 32,
                  paddingRight: 32,
                  marginTop: 26,
                }}>
                <TextButton text={'短信验证码登陆'} />
                <TextButton text={'新用户注册'} />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 32,
                  paddingRight: 32,
                  marginTop: 20,
                }}>
                <Line />
                <Text style={{marginLeft: 18, marginRight: 18}}>
                  其他方式登陆
                </Text>
                <Line />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <AppleLogin />
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: 132,
                paddingRight: 132,
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Image
                source={qq_login}
                style={{
                  width: 36,
                  height: 36,
                }}
              />
              <Image
                source={wechat_login}
                style={{
                  width: 36,
                  height: 36,
                }}
              />
            </View>

            <View
              style={{
                height: 50,
                paddingBottom: 1,
                marginBottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>登陆即代表您同意《京东隐私政策》</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({});
