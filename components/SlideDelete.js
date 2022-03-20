import React from 'react';
import {width} from '../tools/help';
import {Animated, PanResponder, Text, TouchableOpacity, View} from 'react-native';

export default class SlideDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mL: new Animated.Value(0),
            fadeInOpacity: new Animated.Value(0),
            touchBlockPositionX: 0,
            xxx: this.props.xxx,
        };
        // console.log(this.props.children[0])
        this.actionButtonWidth = 60;//滑动删除单个按钮的宽度
        this.actionButtonWidthTotal = -this.actionButtonWidth * this.props.btns.length;//操作按钮的宽度
        this.height = this.props.height === undefined ? this.defaultConfig.height : this.props.height;//高度
        this.defaultConfig = {
            height: 80,
            slideLeftDuration: 300,//向左滑动时长，数值越小速度越快
            slideRightDuration: 300,
            autoLeftSlide: 200,//自动向左滑动时长，数值越小速度越快
        };
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.props.onPanResponderGrant()
            },
            onPanResponderMove: (evt, gestureState) => {
                // console.log(gestureState.dx)
                //屏蔽向右滑动
                if (gestureState.dx > 0) {
                    if (this.state.touchBlockPositionX === 0) {
                        return;
                    } else {
                        this.setState({
                            mL: new Animated.Value(gestureState.moveX - gestureState.x0 + this.state.touchBlockPositionX),
                        });
                    }
                }
                if (gestureState.dx < 0) {
                    if (gestureState.moveX - gestureState.x0 < this.actionButtonWidthTotal) {
                        return false;
                    }
                    // console.log(this.state.touchBlockPositionX, this.actionButtonWidthTotal);
                    if (this.state.touchBlockPositionX === this.actionButtonWidthTotal) {
                        return false;
                    }
                    // if (gestureState.moveX - gestureState.x0<=this.actionButtonWidthTotal){
                    //     return;
                    // }
                    this.setState({
                        mL: new Animated.Value(gestureState.moveX - gestureState.x0 + this.state.touchBlockPositionX),
                        // touchBlockPositionX: gestureState.moveX - gestureState.x0 +this.state.touchBlockPositionX,
                    });
                }

            },
            onPanResponderRelease: (evt, gestureState) => {
                if (this.state.touchBlockPositionX <= -(this.actionButtonWidth * this.props.btns.length) && gestureState.dx < 0) {
                    Animated.timing(                       // 随时间变化而执行动画
                        this.state.mL,            // 动画中的变量值
                        {
                            toValue: this.state.touchBlockPositionX,                        // 透明度最终变为1，即完全不透明
                            duration: this.defaultConfig.slideRightDuration,                   // 让动画持续一段时间
                            useNativeDriver: false,
                        },
                    ).start();
                    this.setState({
                        touchBlockPositionX: this.state.touchBlockPositionX,
                    });
                    return;
                }
                if (this.state.touchBlockPositionX <= -(this.actionButtonWidth * this.props.btns.length) && gestureState.dx > 0) {
                    if (gestureState.dx <= this.actionButtonWidth / 2) {
                        Animated.timing(
                            this.state.mL,
                            {
                                toValue: this.state.touchBlockPositionX,
                                duration: this.defaultConfig.slideRightDuration,
                                useNativeDriver: false,
                            },
                        ).start();
                        // this.setState({
                        //     touchBlockPositionX: this.state.touchBlockPositionX,
                        // });
                    } else {
                        this.positionReset();
                    }
                } else if (gestureState.dx >= -this.actionButtonWidth / 2) {
                    this.positionReset();
                } else if (gestureState.dx < -this.actionButtonWidth / 2) {
                    this.autoLeftSlide();
                }
            },
        });
    }

    //    弹回去
    positionReset() {
        Animated.timing(
            this.state.mL,
            {
                toValue: 0,
                duration: this.defaultConfig.slideRightDuration,
                useNativeDriver: false,
            },
        ).start();
        this.setState({
            touchBlockPositionX: 0,
        });
    }

    //滑动大于一定距离自动滑动到指定位置
    autoLeftSlide() {
        let offSet = -(this.actionButtonWidth * this.props.btns.length);
        Animated.timing(
            this.state.mL,
            {
                toValue: offSet,
                duration: this.defaultConfig.autoLeftSlide,
                useNativeDriver: false,
            },
        ).start();
        this.setState({
            touchBlockPositionX: offSet,
        });
    }

    render() {
        return <View style={{width: width, height: this.height}}>
            <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: 'white',
            }}>
            </View>
            <View style={{
                position: 'absolute',
                right: 0,
                width: this.actionButtonWidthTotal,
                //
                // backgroundColor:'white',
                height: this.height,
                display: 'flex',
                flexDirection: 'row',
            }}>
                {
                    this.props.btns.map((obj, index) => {
                        let colors;
                        if (this.props.btns.length === 2) {
                            colors = ['#ff8911', '#f31b22'];
                        } else if (this.props.btns.length === 3) {
                            colors = ['#8ee500', '#ff8911', '#f31b22'];
                        }else if (this.props.btns.length === 1){
                            colors = ['#f31b22'];
                        }
                        return <TouchableOpacity key={index} onPress={() => {
                            setTimeout(() => {
                                if (obj.clickEvent().result){
                                    this.positionReset();
                                }else {
                                    console.log(obj.clickEvent().tip)
                                }
                            }, 200);
                        }} activeOpacity={1}>
                            <View style={{
                                width: this.actionButtonWidth,
                                height: this.height,
                                backgroundColor: colors[index],
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{color: 'white'}}>
                                    {obj.title}
                                </Text>
                            </View>
                        </TouchableOpacity>;
                    })
                }
            </View>
            <Animated.View style={{
                width: width,
                height: this.height,
                backgroundColor: 'white',
                marginLeft: this.state.mL,
            }} {...this.panResponder.panHandlers}>
                {
                    this.props.children
                }
            </Animated.View>
        </View>;
    }
}
