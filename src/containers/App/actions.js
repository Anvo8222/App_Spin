import {
  SET_TURN,
  REQUEST_DATA,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_IS_SHOW_RANDOM_SCREEN,
  SET_SPIN_RANDOM,
} from './constants';

export const setTurn = turn => ({
  type: SET_TURN,
  turn,
});

export const incrementTurn = amount => ({
  type: INCREMENT_TURN,
  amount,
});

export const decrementTurn = (amount = 1) => ({
  type: DECREMENT_TURN,
  amount,
});

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const setSpinRandom = spinRandom => ({
  type: SET_SPIN_RANDOM,
  spinRandom,
});
export const setIsShowRandomScreen = isShowRandomScreen => ({
  type: SET_IS_SHOW_RANDOM_SCREEN,
  isShowRandomScreen,
});
