import React, {useState, useCallback, useEffect} from 'react';
import {
  Bubble,
  GiftedChat,
  IMessage,
  Send,
  SendProps,
  SystemMessage,
} from 'react-native-gifted-chat';
import {NavBar} from '../../components/NavBar';
import {
  Alert,
  Linking,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import earlierMessages from '../../data/earlierMessages';
import AccessoryBar from '../../components/AccessoryBar';

import Ionicons from 'react-native-vector-icons/Ionicons';

let _isMounted = false;
const user = {
  _id: 1,
  name: 'Developer',
};

export default function Index() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loadEarlier, setLoadEarlier] = useState(true);
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    _isMounted = true;
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
    return () => {
      _isMounted = false;
    };
  }, []);

  const onSend = useCallback((msgs: IMessage[] = []) => {
    const sentMessages = [{...msgs[0], sent: true, received: true}];
    setMessages(previousMsgs => GiftedChat.append(previousMsgs, sentMessages));
  }, []);

  const onLoadEarlier = () => {
    setIsLoadingEarlier(true);

    setTimeout(() => {
      if (_isMounted === true) {
        setMessages(previousMsgs =>
          GiftedChat.append(
            earlierMessages(),
            previousMsgs,
            Platform.OS !== 'web',
          ),
        );
        setLoadEarlier(true);
        setIsLoadingEarlier(false);
      }
    }, 1000); // simulating network
  };

  const parsePatterns = (_linkStyle: any) => {
    return [
      {
        pattern: /#(\w+)/,
        style: {textDecorationLine: 'underline', color: 'darkorange'},
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
    ];
  };

  const onQuickReply = (replies: any[]) => {
    const createdAt = new Date();
    if (replies.length === 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies[0].title,
          user,
        },
      ]);
    } else if (replies.length > 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies.map(reply => reply.title).join(', '),
          user,
        },
      ]);
    } else {
      console.warn('replies param is not set correctly');
    }
  };

  const onSendFromUser = (msgs: IMessage[] = []) => {
    const createdAt = new Date();
    const messagesToUpload = msgs.map(message => ({
      ...message,
      user,
      createdAt,
      _id: Math.round(Math.random() * 1000000),
    }));
    onSend(messagesToUpload);
  };

  const fnIsTyping = () => {
    setIsTyping(!isTyping);
  };

  const renderAccessory = () => (
    <AccessoryBar onSend={onSendFromUser} isTyping={fnIsTyping} />
  );

  const renderBubble = (props: any) => {
    return <Bubble {...props} />;
  };

  const renderSystemMessage = (props: any) => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  };

  const renderSend = (props: SendProps<IMessage>) => (
    <Send {...props} containerStyle={{justifyContent: 'center'}}>
      <Ionicons size={30} color={'tomato'} name={'send'} />
    </Send>
  );

  const renderQuickReplySend = () => <Text>{' custom send =>'}</Text>;

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="main"
      testID="main">
      <NavBar />
      <View style={styles.content}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          loadEarlier={loadEarlier}
          onLoadEarlier={onLoadEarlier}
          isLoadingEarlier={isLoadingEarlier}
          parsePatterns={parsePatterns}
          user={user}
          scrollToBottom
          onLongPressAvatar={() => Alert.alert('short press on avatar')}
          onPressAvatar={() => Alert.alert('short press on avatar')}
          onQuickReply={onQuickReply}
          keyboardShouldPersistTaps="never"
          renderAccessory={Platform.OS === 'web' ? undefined : renderAccessory}
          // renderActions={renderCustomActions}
          renderBubble={renderBubble}
          renderSystemMessage={renderSystemMessage}
          // renderCustomView={renderCustomView}
          renderSend={renderSend}
          quickReplyStyle={{borderRadius: 2}}
          quickReplyTextStyle={{
            fontWeight: '200',
          }}
          renderQuickReplySend={renderQuickReplySend}
          inverted={Platform.OS !== 'web'}
          timeTextStyle={{left: {color: 'red'}, right: {color: 'yellow'}}}
          isTyping={isTyping}
          infiniteScroll
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
