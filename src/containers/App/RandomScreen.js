import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Alert,
  Animated,
  Easing,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn, setSpinRandom } from './actions';
import Buttons from './Buttons';
import spins from './data/spins';
import { makeSelectTurn, makeSpinRandom } from './selectors';
import { homeStyle, spinStyle } from './style';

function RandomScreen({ dispatch, spinRandom, turn }) {
  const [isShowButtons, setIsShowButtons] = useState(false);
  const [isSpining, setIsSpining] = useState(false);
  const [rotateImg, setRotateImg] = useState(new Animated.Value(0));

  const onSetShowButtons = () => {
    setIsShowButtons(!isShowButtons);
  };

  const rotateData = rotateImg.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const onChangeSpin = () => {
    if (isSpining) return false;
    if (turn <= 0) {
      Alert.alert('Not enough turn!');
      return false;
    }
    const time = 5000;
    dispatch(decrementTurn(1));
    setIsSpining(true);
    Animated.timing(rotateImg, {
      toValue: 1,
      duration: time,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
    setTimeout(() => {
      dispatch(setSpinRandom(spins[Math.floor(Math.random() * spins.length)]));
      setRotateImg(new Animated.Value(0));
      setIsSpining(false);
    }, time);
  };

  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.background}>
      <View style={homeStyle.main}>
        <View style={homeStyle.title}>
          <TouchableOpacity
            onPress={onSetShowButtons}
            onLongPress={onSetShowButtons}>
            <Image style={[homeStyle.cart]} source={images.home.buy} />
            <Text style={homeStyle.textTitle}>{turn}</Text>
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            ...homeStyle.container,
            ...{ transform: [{ rotate: rotateData }] },
          }}>
          <Image style={spinStyle.spinImg} source={spinRandom.srcImg} />
        </Animated.View>
        <View style={[homeStyle.container]}>
          <TouchableOpacity
            onPress={() => onChangeSpin()}
            onLongPress={() => onChangeSpin()}>
            <Image style={homeStyle.btnOk} source={images.home.btnSpin} />
          </TouchableOpacity>
        </View>
        {isShowButtons ? <Buttons /> : false}
      </View>
    </ImageBackground>
  );
}
RandomScreen.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
  spinRandom: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  spinRandom: makeSpinRandom(),
  turn: makeSelectTurn(),
});
export default connect(mapStateToProps)(RandomScreen);
