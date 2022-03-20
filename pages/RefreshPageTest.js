



import React, { Component } from "react";
import { Animated, Easing, PanResponder, SafeAreaView, ScrollView, Text, View } from "react-native";
import { height, width } from "../tools/help";
export default class RefreshPageTest extends Component {
  constructor(props) {
    super(props);
  }

  refreshEnd() {
    console.log("加载数据");
  }

  render() {
    return <RefreshContainer onRefreshEnd={this.refreshEnd.bind(this)}>


      {
        [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9].map((obj, index) => {
          return <Text style={{ height: 50 }}>{index}</Text>;
        })
      }
    </RefreshContainer>;
  }
}


class RefreshContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mT: new Animated.Value(0),
      tipsText: "下拉刷新",
      isScroll: true,
      isTop: 0,
      yOffset: 0,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        return true;
      },
      onMoveShouldSetPanResponder: (event, gestureState) => {
        // if (Math.abs(gestureState.dy) > Math.abs(gestureState.dx)) {
        //
        // }
        // if (this.state.mT._value <= 0 && gestureState.dy > 0) {
        //   return true;
        // }else {
        //   return false
        // }
        return true;

      },
      // onPanResponderGrant: (evt, gestureState) => {
      // },
      onPanResponderMove: (evt, gestureState) => {

        if (gestureState.dy < 0) {
          this.setState({
            yOffset: -gestureState.dy,
          });
        }

        this.setState({
          tipsText: "下拉刷新",
        });
        // this.setState({
        //   mT: new Animated.Value(gestureState.dy),
        // })
        this.state.mT.setValue(gestureState.dy);
        //  下拉到一定距离，改变文字
        console.log(gestureState);
        if (this.state.mT._value >= 100) {
          this.setState({
            tipsText: "松开刷新",
          });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        let mT = this.state.mT._value;

        if (gestureState.dy >= 100) {
          Animated.timing(this.state.mT, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true,
          }).start();
          let that = this;
          that.setState({
            tipsText: "刷新中",
          });
          setTimeout(function() {
            that.setState({
              tipsText: "刷新完成",
            });
            Animated.timing(that.state.mT, {
              toValue: 0,
              duration: 600,
              useNativeDriver: true,
            }).start();

          }, 1000);
          that.props.onRefreshEnd();


        } else {
          Animated.timing(this.state.mT, {
            easing: Easing.linear,
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }).start();
        }
        // this.setState({
        //   yOffset:-gestureState.dy
        // })
      },
      onPanResponderTerminate: (evt, gestureState) => {
        Animated.timing(this.state.mT, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }).start();
      },
    });
  }

  onScroll = (e) => {
    // console.log(e.nativeEvent.contentOffset.y);


  };

  render() {
    return <View style={{ height: height }} {...this.panResponder.panHandlers}>
      <Animated.View style={{
        width: width,
        height: this.height,
        backgroundColor: "green",
        transform: [{ translateY: this.state.mT }],
        marginTop: -100,
      }}>
        <View style={{ backgroundColor: "red", height: 100, justifyContent: "center", alignItems: "center" }}>
          <Text>{this.state.tipsText}</Text>
        </View>

        <ScrollView contentOffset={{ y: -this.state.yOffset }} scrollEventThrottle={16}
                    style={{ height: 300, backgroundColor: "purple" }} onScroll={this.onScroll}>
          {
            this.props.children
          }
        </ScrollView>
      </Animated.View>

    </View>;
  }
}
