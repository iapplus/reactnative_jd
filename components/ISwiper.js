import React from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet, View,
} from 'react-native';
import {width} from '../tools/help';
import Swiper from 'react-native-swiper';

//首页轮播图
export function HomePageSwiper({images, state}) {
    {
        return <Swiper style={{
            height: 130,
        }} showsButtons={false} dot={
            <View
                style={{
                    backgroundColor: 'white',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            />
        } activeDot={
            <View
                style={{
                    backgroundColor: 'red',
                    width: 20,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            />
        } autoplay={state} autoplayTimeOut={2.5}>
            {
                images.map((info, index) => {
                    return (<View style={{
                        overflow: 'hidden',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} key={index}>
                        <Image key={index} source={info.imageSrc} resizeMode="cover"
                               style={{width: width - 20, borderRadius: 10, height: 130}}/>
                    </View>);
                })
            }
        </Swiper>;
    }
}
//商品详情页轮播图
export function ShopDetailPageSwiper({images}) {
    {
        return <Swiper style={{
            height: 400,
        }} showsButtons={false} dot={
            <View
                style={{
                    backgroundColor: 'white',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            />
        } activeDot={
            <View
                style={{
                    backgroundColor: 'red',
                    width: 20,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            />
        } autoplay={false}>
            {
                images.map((info, index) => {
                    return (<View style={{
                        overflow: 'hidden',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} key={index}>
                        <Image key={index} source={info.imageSrc} resizeMode="contain"
                               style={{width: width,height: 300}}/>
                    </View>);
                })
            }
        </Swiper>;
    }
}


export function ScrollMenu({images, state}) {
    {
        return <Swiper style={{
            height: 130,
        }} showsButtons={false} dot={
            <View
                style={{
                    backgroundColor: 'white',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            />
        } activeDot={
            <View
                style={{
                    backgroundColor: 'red',
                    width: 20,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            />
        } autoplay={state} autoplayTimeOut={2.5}>
            {
                images.map((info, index) => {
                    return (<View style={{
                        overflow: 'hidden',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} key={index}>
                        <Image key={index} source={info.imageSrc} resizeMode="cover"
                               style={{width: width - 20, borderRadius: 10, height: 130}}/>
                    </View>);
                })
            }
        </Swiper>;
    }
}
