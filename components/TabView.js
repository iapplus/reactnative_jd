import React from 'react';
import {
    ScrollView,
    StyleSheet, Text, TouchableOpacity, View, Animated, Easing,
} from 'react-native';
import {width, height} from '../tools/help';

export default class TabView extends React.Component {
    static defaultProps = {
        menu: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            dynamicHeight: new Animated.Value(0),
            pages: [{show: true}, {show: false}, {show: false}, {show: false}],
        };
    }

    componentDidMount(): void {
        // console.log(this.props.children);
    }

    _onPressButton(index) {
        const pages = this.state.pages;
        for (let i = 0; i < pages.length; i++) {
            pages[index] = i === index;
        }
        this.setState({
            pages: pages,
            index: index,
        });
        Animated.spring(
            this.state.dynamicHeight,
            {
                toValue: index * 50,
                duration: 3000,
                useNativeDriver: true,
            },
        ).start();
        console.log(index);
    }

    render() {
        return (<View>
            <View style={{backgroundColor: 'red', width: width, height: 28,paddingTop:0,paddingBottom:0}}>
                <ScrollView style={{width: width, height: 32}} horizontal={true}
                            showsHorizontalScrollIndicator={false} iosalwaysBounceHorizontal={false} iosbounces={false}>
                    {
                        this.props.menu.map((info, index) => {
                            return (
                                <TouchableOpacity activeOpacity={1} key={index}
                                                  onPress={() => this._onPressButton(index)}>
                                    <Text style={{
                                        width: 50,
                                        height: 30,
                                        textAlign: 'center',
                                        color: 'white',
                                        // color: index === this.state.index ? 'yellow' : 'white',
                                        // fontSize: 15,
                                        fontSize: index === this.state.index ? 16 : 16,
                                        marginTop: 4,
                                    }}>{info.name}</Text>
                                </TouchableOpacity>);
                        })
                    }
                </ScrollView>
                <Animated.View style={{
                    width: 30,
                    height: 4,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    marginLeft: 10,
                    // marginTop: -10,
                    transform: [{translateX: this.state.dynamicHeight}],
                }}>
                </Animated.View>
            </View>
            {
                React.Children.map(this.props.children[this.state.index], function (child) {
                    return child;
                })
            }
        </View>);
    }
}
