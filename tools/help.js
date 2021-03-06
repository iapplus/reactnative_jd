import {Dimensions, Platform} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
