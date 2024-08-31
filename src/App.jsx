import React, { useReducer } from 'react';
import "./App.css";

const initialState = {
  email: '',
  password: '',
  isSubmitted: false, 
};

function reducer(state, action) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'submit':
      return { ...state, isSubmitted: true };  
          case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'submit' });
    console.log('Form Submitted:', state);
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="card">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: 'email', payload: e.target.value })
            }
          />
        </div>
        <div className="form">
          <label>Password:</label>
          <input
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: 'password', payload: e.target.value })
            }
          />
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {state.isSubmitted ? (  
        <div className="user-details">
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div className="user-details">No details found</div>
      )}
    </div>
  );
}

export default App;
