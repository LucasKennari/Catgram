import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserStorage } from './useHooks/useContext'

import "./app.css"

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Login from './components/rotasLogin/login/Login'

const App = () => {

          // return (
          //           <Api />
          // )
          return (
                    <div className='App'>
                              <BrowserRouter>
                                        <UserStorage>
                                                  <Header />
                                                  <main className='AppBody'>
                                                            <Routes>
                                                                      {/* <Route path='/' end
                                                                                element={<Home />} /> */}

                                                                      <Route path='login/*'
                                                                                element={<Login />} />
                                                                      {/* 
                                                                      <Route path='/conta/*'
                                                                                element={<ProtectedRoute>
                                                                                          <User />
                                                                                </ProtectedRoute>} />

                                                                      <Route path='/foto/:id' element={<Photo />} />
                                                                      <Route path='/perfil/:user' element={<UserProfile />} />
                                                                      <Route path='/*' element={<NotFound />} />  */}
                                                            </Routes>

                                                            {/* <ChatComponents /> */}
                                                  </main>

                                                  <Footer />
                                        </UserStorage>
                              </BrowserRouter>
                    </div>
          )
}

export default App
