/* eslint-disable no-param-reassign */
import produce from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SET_TURN,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_SPIN_RANDOM,
  SET_IS_SHOW_RANDOM_SCREEN,
} from '../constants';

export const initialState = {
  turn: 10,
  spinRandom: {},
  isShowRandomScreen: false,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_SPIN_RANDOM:
        draft.spinRandom = action.spinRandom;
        break;
      case SET_IS_SHOW_RANDOM_SCREEN:
        draft.isShowRandomScreen = action.isShowRandomScreen;
        break;
      case SET_TURN:
        AsyncStorage.setItem('@turn', JSON.stringify(action.turn));
        draft.turn = action.turn;
        break;

      case INCREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(action.amount) + Number(draft.turn)),
        );
        draft.turn += Number(action.amount);
        break;

      case DECREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(draft.turn) - Number(action.amount)),
        );
        draft.turn -= Number(action.amount);
        break;
    }
  });
