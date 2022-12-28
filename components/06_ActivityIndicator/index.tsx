import {View, Platform, ActivityIndicator} from 'react-native';
import React from 'react';

export default function index() {
  if (Platform.OS === 'android') {
    console.log('当前是安卓应用');
  } else if (Platform.OS === 'ios') {
    console.log('当前应用是 iOS');
  }
  return (
    <View>
      <ActivityIndicator color="blue" size={'large'} />
      <ActivityIndicator color="green" size={'small'} />
      {/* 数字指定大小，只在 Android 应用下有效 */}
      <ActivityIndicator color="#00d0ff" size={70} />
      <ActivityIndicator color="red" size={100} />
    </View>
  );
}
