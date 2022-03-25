import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () => createSelector(selectGlobal, state => state);

const makeSelectTurn = () => createSelector(selectGlobal, state => state.turn);

const makeSpinRandom = () =>
  createSelector(selectGlobal, state => state.spinRandom);

const makeIsShowRandomScreen = () =>
  createSelector(selectGlobal, state => state.isShowRandomScreen);

export {
  makeSelectGlobal,
  makeSelectTurn,
  makeSpinRandom,
  makeIsShowRandomScreen,
};
