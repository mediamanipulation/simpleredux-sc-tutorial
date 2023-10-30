import { useDispatch, useSelector } from 'react-redux';
import { GET_USERS_FETCH, getUsersFetch } from './store/actions'; // Modified path
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users || []);
  console.log("app user - ",users);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(getUsersFetch())}>Get users</button>
        <ul>
          {users.map(user => (<><li key={user.id}>{user.name}</li><ul>{user.email}</ul></>))}
        </ul>
      </header> 
    </div>
  );
}

export default App;



// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GET_USERS_FETCH, getUsersFetch } from './actions';
// import './App.css'

// function App() {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.myFirst.users);
// console.log("app user - ",users);
//   return (
//     <div className="App">
//       <header className="App-header">
//       <button onClick={() => dispatch(getUsersFetch())}>Get users</button>
//         <ul>
//         {users.map(user => (<li key={user.id}>{user.name}</li>))}
//         </ul>
//       </header> 
//     </div>
//   )
// };


// export default App



// working code
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GET_USERS_FETCH, getUsersFetch } from './actions';
// import './App.css'

// function App() {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.myFirst.users);
// console.log("app user - ",users);
//   return (
//     <div className="App">
//       <header className="App-header">
//       <button onClick={() => dispatch(getUsersFetch())}>Get users</button>
//         <ul>
//         {users.map(user => (<li key={user.id}>{user.name}</li>))}
//         </ul>
//       </header> 
//     </div>
//   )
// };


// export default App
