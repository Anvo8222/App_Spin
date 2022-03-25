import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import HomeScreen from './HomeScreen';
import RandomScreen from './RandomScreen';
import reducer from './reducer';
import { makeIsShowRandomScreen } from './selectors';
import { homeStyle } from './style';

const key = 'App';

function App({ isShowRandomScreen }) {
  useInjectReducer({ key, reducer });

  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.background}>
      {isShowRandomScreen ? <RandomScreen /> : <HomeScreen />}
    </ImageBackground>
  );
}

App.propTypes = {
  isShowRandomScreen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isShowRandomScreen: makeIsShowRandomScreen(),
});

export default connect(mapStateToProps)(App);
