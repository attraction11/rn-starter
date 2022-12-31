import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from '../../redux/actions/Counter';

const mapStateToProps = (state: any) => {
  return {
    num: state.Counter.num,
  };
};

function mapDispatchToProps(dispatch: any) {
  return {
    incrementAction: (num: number) => dispatch(increment(num)),
    decrementAction: (num: number) => dispatch(decrement(num)),
  };
}

function Counter({
  num,
  incrementAction,
  decrementAction,
}: {
  num: number;
  incrementAction: any;
  decrementAction: any;
}) {
  return (
    <View style={[styles.container]}>
      <Button title={'-'} onPress={() => decrementAction(1)} />
      <Text>{num}</Text>
      <Button title={'+'} onPress={() => incrementAction(1)} />
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
