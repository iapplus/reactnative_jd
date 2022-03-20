import React from 'react';
import {
    Button, Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, Text, TouchableOpacity,
    View,
} from "react-native";
import {height, width} from '../../tools/help';
import TabView from '../../components/TabView';
import MainTabChild from '../home/MainTabChild';
import {CategorySearchBar} from '../../components/CateagorySearchBar';
import {no_network, rightArrow} from '../../icons/images';
import Placeholder from '../../components/Placeholder';


// export default function Home ({navigation}){
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Details Screen</Text>
//           <Button
//             title="Go to Details... again"
//             onPress={() => navigation.navigate('SettingsPage')}
//           />
//       </View>
//     );
// }


export default function Home({navigation}) {
    // useFocusEffect(
    //     React.useCallback(() => {
    //         console.log("aaaaa")
    //         StatusBar.setBarStyle('light-content');
    //         StatusBar.setBackgroundColor('#6a51ae');
    //         // Platform.OS === 'ios' && StatusBar.setBackgroundColor('#6a51ae');
    //     }, []),
    // );

    this.toSearchPage = () => {
        navigation.push('SearchPage', {
            name: 'wangpengyu',
        });
    };

    this.onScrollBeginDrag = () => {
        console.log('start');
    };
    this.onScrollEndDrag = (e) => {
        // this.refs['myScrollView'].scrollTo({ x: 0, y: py, animated: true });
        console.log('end', e.nativeEvent.contentOffset);
    };
    this.onAnimationEnd = (e) => {
        // 获取滑动的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        // 通过偏移量和屏幕宽度计算第几页
        var currentPage = Math.floor(offSetX / width);
        //  更新值已获取屏幕更新
        // this.setState({
        //     currentPage:currentPage
        // });
        console.log('...');
    };

    return (
        <>
            <StatusBar
                // backgroundColor={'red'}
                // translucent={false}
                // hidden={false}
                barStyle={'light-content'}
            />

            <SafeAreaView style={{backgroundColor: 'red'}}>
                {/*<StatusBar animated={true}*/}
                {/*           hidden={false}*/}
                {/*           backgroundColor={'red'}*/}
                {/*           translucent={false}*/}
                {/*           barStyle={'light-content'}*/}
                {/*           // showHideTransition={'fade'}*/}
                {/*           networkActivityIndicatorVisible={true}/>*/}
                <ScrollView
                    scrollEnabled={false}
                    // ref="myScrollView"
                    //  设置横向排列
                    horizontal={false}
                    vertical={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // 自动分页效果，Android无此效果
                    pagingEnabled={false}
                    // 开始拖拽
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    // 停止拖拽
                    onScrollEndDrag={this.onScrollEndDrag}
                    // 当滑动后的回调
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>

                    {/*<View style={{*/}
                    {/*    width: width,*/}
                    {/*    height: 100,*/}
                    {/*    backgroundColor: 'yellow',*/}
                    {/*    position: 'absolute',*/}
                    {/*    marginTop: -100,*/}
                    {/*}}>*/}
                    {/*    <Text>*/}
                    {/*        下拉刷新*/}
                    {/*    </Text>*/}
                    {/*</View>*/}
                    {/*<View style={{*/}
                    {/*    position: 'absolute',*/}
                    {/*    width: width,*/}
                    {/*    height: width / 2,*/}
                    {/*    backgroundColor: 'red',*/}
                    {/*    top:90,*/}
                    {/*    borderBottomLeftRadius: width / 2,*/}
                    {/*    borderBottomRightRadius: width / 2,*/}
                    {/*}}/>*/}
                    <View style={{
                        width: width,
                        // height: 40,
                        backgroundColor: 'red',
                        // paddingLeft: 10,
                        // paddingRight: 30,
                        paddingBottom: 0,
                        // marginTop: 10,
                    }}>
                        <CategorySearchBar backgroundColor={'red'} clickEvent={() => this.toSearchPage()}/>

                        {/*<View style={{borderRadius: 16, backgroundColor: 'white'}}>*/}
                        {/*    <TouchableOpacity onPress={this.toSearchPage.bind(this)}>*/}
                        {/*        <Text style={{*/}
                        {/*            height: 40,*/}
                        {/*            paddingLeft: 16,*/}
                        {/*            lineHeight: 40,*/}
                        {/*            color: '#c1c1c1',*/}
                        {/*        }}>戴尔3670</Text>*/}
                        {/*    </TouchableOpacity>*/}
                        {/*</View>*/}
                    </View>


                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                          navigation.push('Root')
                      }}>
                        <Text>王鹏宇</Text>
                    </TouchableOpacity>

                    <TabView menu={[{id: 1, name: '首页'}, {id: 2, name: '电脑'}, {id: 3, name: '食品'}, {
                        id: 4, name: '数码',
                    }]}>
                        <MainTabChild navigation={navigation}/>
                        <Placeholder type={'noNetwork'} offset_y={-10}/>
                        <View style={{width: width, height: 800, backgroundColor: 'red'}}/>
                        <View style={{width: width, height: 800, backgroundColor: 'yellow'}}/>
                    </TabView>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    menuItemIcon: {
        width: 50,
        height: 50,
    },
    iconmenu: {
        marginTop: 10,
        width: width,
        height: 100,
        // backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    menuItem: {
        width: 100,
        height: 100,
    },
    menuItemText: {
        width: 80,
        height: 80,
        alignItems: 'center',
    },
    wrapper: {
        borderRadius: 30,
        height: 200,
    },
    slide: {
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB'
    },
    scrollView: {
        // paddingTop: Platform.OS === 'android' ? 20 : 0,
        height: height,
        backgroundColor: '#F3F3F3',
    },
});
