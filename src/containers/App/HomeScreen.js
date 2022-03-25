import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import { setIsShowRandomScreen, setSpinRandom } from './actions';
import Buttons from './Buttons';
import spins from './data/spins';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import { homeStyle, spinStyle } from './style';

const key = 'App';

function HomeScreen({ turn, dispatch }) {
  useInjectReducer({ key, reducer });
  const [isShowButtons, setIsShowButtons] = useState(false);

  const onSetShowButtons = () => {
    setIsShowButtons(!isShowButtons);
  };

  const onChangeSpin = spinNew => {
    if (turn <= 0) {
      Alert.alert('Not enough turn!');
      return false;
    }
    dispatch(setSpinRandom(spinNew));
    dispatch(setIsShowRandomScreen(true));
  };
  const RenderSpin = (min, max, width) => {
    const result = [];
    for (let i = min; i <= max; i += 1) {
      result.push(
        <TouchableOpacity
          onPress={() => onChangeSpin(spins[i])}
          onLongPress={() => onChangeSpin(spins[i])}
          style={{ width }}
          key={i}>
          <Image source={spins[i]?.srcImg} style={spinStyle.image} />
        </TouchableOpacity>,
      );
    }
    return result;
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
            <Image style={homeStyle.cart} source={images.home.buy} />
            <Text style={homeStyle.textTitle}>{turn}</Text>
          </TouchableOpacity>
        </View>
        <Image style={homeStyle.tutorial} source={images.home.tutorial} />
        <View style={homeStyle.container}>
          <View style={spinStyle?.solarWrapper}>
            {RenderSpin(0, 1, '50%')}
            {RenderSpin(2, 2, '100%')}
            {RenderSpin(3, 4, '50%')}
          </View>
        </View>
        <View style={homeStyle.container}>
          <Image style={homeStyle.btnOk} source={images.home.btnOk} />
        </View>
      </View>
      {isShowButtons ? <Buttons /> : false}
    </ImageBackground>
  );
}

HomeScreen.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(HomeScreen);
