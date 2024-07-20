import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Private from './pages/Private'
import ProtectedRoute from './components/ProtectedRoute'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const App = () => {
  const [user, setUser] = useState (null)
  const [isFetching, setIsFetching] = useState(true)
  
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })
    return () => unsubsribe()

    
  }, [])

  if(isFetching) {
    return <h2>Loadind...</h2>
  }


  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route index path='/' element={ <Home />}></Route>
            <Route path='private' element={ <ProtectedRoute user={user}>
              <Private />
            </ProtectedRoute>}></Route>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App