import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

// const makeLouder = (string) => string.toUpperCase();
// const repeatThreeTimes = (string) => string.repeat(3);
// const embolden = (string) => string.bold();

// const loudText = compose(makeLouder, repeatThreeTimes, embolden);
// console.log(loudText("Hello EveryOne"));

const initialState = { value: 0 };

const INCREMENT = "INCREMENT"; // to prevent errors with strings misplessings and errors
const ADD = "ADD";

const incrementAction = {
  type: INCREMENT,
};

const counter = (amount) => ({
  type: "INCREMENT",
  payload: amount,
});

const add = (amount) => ({
  type: ADD,
  payload: amount,
});

const increment = () => ({ type: INCREMENT });

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer, initialState);
// console.log(store);

store.dispatch(increment());

console.log(store.getState());
