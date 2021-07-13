import './App.css';
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

function App() {
  return <div className='App'></div>;
}

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buycake() {
  return {
    type: BUY_CAKE,
    info: ' first redux action'
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM
  };
}

// const initialState = {
//   numberOfCake: 10,
//   buyIceCream: 15
// };
const initialCakeState = {
  numberOfCake: 10
};

const initialIceCream = {
  numberOfIceCream: 15
};
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1
      };

    default:
      return state;
  }
};



// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake - 1
//       };

//     case BUY_ICECREAM:
//       return {
//         ...state,
//         buyIceCream: state.buyIceCream - 1
//       };
//     default:
//       return state;
//   }
// };
const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})
const store = createStore( rootReducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('update state', store.getState());
});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

 export default App;
