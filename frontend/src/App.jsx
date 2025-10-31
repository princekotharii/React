import React from 'react'
import './App.css'
import AppRouter from './Routes/Routes'
import UserProvider from './contexts/UserProvider'
import Layout from './Components/Layout'

function App() {
  return (
    <UserProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </UserProvider>
  )
}

export default App