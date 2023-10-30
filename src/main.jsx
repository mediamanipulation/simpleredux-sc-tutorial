import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/configureStore'; // Modified path
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import myFirstReducer from './reducers.jsx'; // Make sure this exports a slice reducer
// import mySaga from './sagas.jsx'; // Import your sagas
// import './index.css';

// // 1. Create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// // 3. Configure the store and apply middleware
// const store = configureStore({
//   reducer: {
//     myFirst: myFirstReducer, // Assuming myFirstReducer is a slice reducer
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), // Apply the saga middleware
// });

// // 4. Run the saga
// sagaMiddleware.run(mySaga);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import myFirstReducer from './reducers.jsx'; // Make sure this exports a slice reducer
// import mySaga from './sagas.jsx'; // Import your sagas
// import './index.css';

// // 1. Create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// // 2. Combine reducers if you have more than one
// const rootReducer = combineReducers({
//   myFirst: myFirstReducer, // Assuming myFirstReducer is a slice reducer
// });

// // 3. Configure the store and apply middleware
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), // Apply the saga middleware
// });

// // 4. Run the saga
// sagaMiddleware.run(mySaga);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
