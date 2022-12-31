import React from 'react';
import {WebView} from 'react-native-webview';

export default function Detail({route}: {route: any}) {
  return <WebView source={{uri: route.params.url}} />;
}
