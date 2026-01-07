import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1. Import Amplify UI components
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    /* 2. Wrap the entire UI in the Authenticator */
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          
          {/* 3. Personalized greeting using the authenticated user */}
          <h1>Hello, {user?.signInDetails?.loginId}</h1>
          
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              You are now logged in and can access your dashboard.
            </p>
          </div>

          <div className="card">
            {/* 4. Add a Sign Out button */}
            <button onClick={signOut} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>
              Sign Out
            </button>
          </div>

          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </main>
      )}
    </Authenticator>
  )
}

export default App