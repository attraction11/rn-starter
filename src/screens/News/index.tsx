import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {getNewsList} from '../../utils/api';
import Loading from '../../components/Loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NewsItemVO, TypeVO} from './type';

const defaultTypes: TypeVO[] = [
  {key: 'top', title: '头条'},
  {key: 'shehui', title: '社会'},
  {key: 'guonei', title: '国内'},
  {key: 'guoji', title: '国际'},
  {key: 'yule', title: '娱乐'},
  {key: 'tiyu', title: '体育'},
  {key: 'junshi', title: '军事'},
  {key: 'keji', title: '科技'},
  {key: 'caijing', title: '财经'},
  {key: 'shishang', title: '时尚'},
];

export default function Index({navigation}: {navigation: any}) {
  const [list, setList] = useState<NewsItemVO[]>([]);
  const [typeIndex, setTypeIndex] = useState(0);
  const [currType, setCurrType] = useState('top');

  const getList = () => {
    getNewsList(currType)
      .then(res => {
        setList(res);
      })
      .catch(err => {
        Alert.alert(JSON.stringify(err));
      });
  };

  const newsItem = ({index, item}: {index: number; item: NewsItemVO}) => {
    if (item.thumbnail_pic_s02 && item.thumbnail_pic_s03) {
      return newsItemThreeImages({index, item});
    } else {
      return newsItemSingleImage({index, item});
    }

    // return this.newsItemSingleImage({index, item})
  };

  useEffect(getList, [currType]);

  const newsItemSingleImage = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    index,
    item,
  }: {
    index: number;
    item: NewsItemVO;
  }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            url: item.url,
            title: item.title,
            uniquekey: item.uniquekey,
          })
        }>
        <View style={[styles.newsItem1Container]}>
          <View style={[styles.newsItem1Text]}>
            <Text style={[styles.newsItem1Title]} numberOfLines={2}>
              {item.title}
            </Text>
            <View style={[styles.newsItem1Footer]}>
              <Text style={[styles.newsItem1Meta]} numberOfLines={1}>
                {item.date} {item.author_name}
              </Text>
              <Ionicons name={'heart-outline'} size={18} />
            </View>
          </View>
          <Image
            source={{uri: item.thumbnail_pic_s}}
            style={[styles.newsItem1Image]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  // 展示新闻列表中的一条新闻
  const newsItemThreeImages = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    index,
    item,
  }: {
    index: number;
    item: NewsItemVO;
  }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            url: item.url,
            title: item.title,
            uniquekey: item.uniquekey,
          })
        }
        style={{marginVertical: 5}}>
        <View style={[styles.newsItemContainer]}>
          <Text
            style={[styles.newsItemHeader]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.title}
          </Text>

          <View>
            <View style={[styles.newsItemImageContainer]}>
              <Image
                source={{uri: item.thumbnail_pic_s}}
                style={[styles.newsItemImage]}
              />
              <Image
                source={{uri: item.thumbnail_pic_s02}}
                style={[styles.newsItemImage]}
              />
              <Image
                source={{uri: item.thumbnail_pic_s03}}
                style={[styles.newsItemImage]}
              />
            </View>
          </View>

          <View style={[styles.newsItemFooter]}>
            <Text style={[styles.newsItemMeta]}>
              {item.date} {item.author_name}
            </Text>
            <Ionicons name={'heart-outline'} size={18} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const newsType = ({index, item}: {index: number; item: TypeVO}) => {
    let isActive = item.key === currType;
    return (
      <TouchableOpacity
        onPress={() => {
          setTypeIndex(index > 3 ? index - 3 : 0);
          // @ts-ignore
          setCurrType(item.key, () => {
            getList();
          });
        }}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 65,
            height: 46,
            padding: 10,
            backgroundColor: isActive ? '#dfb' : '#fff',
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: isActive ? 'red' : '#333',
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {list.length ? (
        <FlatList
          data={list}
          renderItem={newsItem}
          keyExtractor={item => item.uniquekey}
          ListHeaderComponent={() => {
            return (
              <FlatList
                horizontal={true}
                data={defaultTypes}
                keyExtractor={item => item.key}
                renderItem={newsType}
                initialScrollIndex={typeIndex}
              />
            );
          }}
          ListFooterComponent={() => {
            return (
              <Text style={[styles.listFooter]}>---- 没有更多了 ----</Text>
            );
          }}
          ItemSeparatorComponent={() => {
            return <View style={[styles.itemSeparator]} />;
          }}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  newsItem1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  newsItem1Text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: (Dimensions.get('window').width * 2) / 3 - 20,
  },
  newsItem1Title: {
    paddingHorizontal: 10,
    fontSize: 18,
    width: (Dimensions.get('window').width * 2) / 3,
    marginBottom: 20,
  },
  newsItem1Footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  newsItem1Meta: {
    fontSize: 13,
  },
  newsItem1Image: {
    width: Dimensions.get('window').width / 3,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  newsItemContainer: {
    margin: 10,
  },
  newsItemHeader: {
    fontSize: 18,
    width: Dimensions.get('window').width - 20,
  },
  newsItemImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsItemImage: {
    width: Dimensions.get('window').width / 3 - 20,
    height: 80,
    marginVertical: 10,
  },
  newsItemFooter: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // flexWrap: 'wrap'
  },
  newsItemMeta: {
    fontSize: 13,
  },
  listFooter: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 40,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
  },
});
