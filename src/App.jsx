import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserStorage } from './useHooks/useContext'

import "./app.css"

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Login from './components/rotasLogin/login/Login'
import ProtectedRouter from './components/helper/protectedRouter/ProtectedRouter'
import User from './components/userAccount/user/User'

const App = () => {

          return (
                    <div className='App'>
                              <BrowserRouter>
                                        <UserStorage>
                                                  <Header />
                                                  <main className='AppBody'>
                                                            <Routes>
                                                                      {/* <Route path='/' end
                                                                                element={<Home />} />  */}

                                                                      <Route path='login/*'
                                                                                element={<Login />} />

                                                                      <Route path='/conta/*'
                                                                                element={
                                                                                          <ProtectedRouter>
                                                                                                    <User />
                                                                                          </ProtectedRouter>
                                                                                } />

                                                                      {/* <Route path='/foto/:id' element={<Photo />} />
                                                                      <Route path='/perfil/:user' element={<UserProfile />} />
                                                                      <Route path='/*' element={<NotFound />} />   */}
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
