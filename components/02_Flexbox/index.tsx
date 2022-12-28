import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

export default function index() {
  return (
    <View>
      <ScrollView>
        <Text>Flex 布局展示</Text>
        <View
          style={[
            styles.container,
            styles.flexRow,
            styles.alignItemsStart,
            styles.JustifyContentCenter,
          ]}>
          <Text style={[{flex: 1}]}>one</Text>
          <Text style={[{flex: 2}]}>two</Text>
          <Text style={[{flex: 3}]}>three</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  flexColum: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  JustifyContentCenter: {
    justifyContent: 'center',
  },
});
