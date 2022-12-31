import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {logout} from '../../redux/actions/User';
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch: any) {
  return {
    logoutAction: () => dispatch(logout()),
  };
}

function Index({
  navigation,
  logoutAction,
}: {
  navigation: any;
  logoutAction: any;
}) {
  const doLogout = () => {
    logoutAction();
    Alert.alert('成功', '退出成功');
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View style={[styles.avatar]}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={[styles.avatarImg]}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <View style={[styles.listItem]}>
            <View style={[styles.flexRow]}>
              <Ionicons
                name={'information-circle-outline'}
                size={20}
                color={'#2d3'}
              />
              <Text style={[styles.listItemTxt]}>关于</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={20}
              color={'#bbb'}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('aaa')}>
          <View style={[styles.listItem]}>
            <View style={[styles.flexRow]}>
              <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
              <Text style={[styles.listItemTxt]}>设置</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={20}
              color={'#bbb'}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={[styles.listItem]}>
            <View style={[styles.flexRow]}>
              <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
              <Text style={[styles.listItemTxt]}>登录</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={20}
              color={'#bbb'}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
          <View style={[styles.listItem]}>
            <View style={[styles.flexRow]}>
              <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
              <Text style={[styles.listItemTxt]}>计数器</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={20}
              color={'#bbb'}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={doLogout}>
          <View style={[styles.listItem]}>
            <View style={[styles.flexRow]}>
              <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
              <Text style={[styles.listItemTxt]}>退出</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={20}
              color={'#bbb'}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(null, mapDispatchToProps)(Index);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  flexRow: {
    flexDirection: 'row',
  },
  listItemTxt: {
    marginLeft: 10,
    fontSize: 18,
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatarImg: {
    width: 80,
    height: 80,
    marginVertical: 10,
    borderRadius: 40,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
    paddingHorizontal: 20,
  },
});
