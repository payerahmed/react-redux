import './App.css';
const redux = require('redux');
const createStore = redux.createStore;

function App() {
  return <div className='App'></div>;
}

const BUY_CAKE = 'BUY_CAKE';

function buycake() {
  return {
    type: BUY_CAKE,
    info: ' first redux action'
  };
}

const initialState = {
  numberOfCake: 10
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('update state', store.getState());
});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
unsubscribe();

export default App;
