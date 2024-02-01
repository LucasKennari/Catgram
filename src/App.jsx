import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserStorage } from './useHooks/useContext'

import "./app.css"

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Login from './components/rotasLogin/login/Login'
import ProtectedRouter from './components/helper/protectedRouter/ProtectedRouter'
import User from './components/userAccount/user/User'
import Home from './home/Home'
import Photo from './components/userPhoto/photo/Photo'
import UserProfile from './components/userAccount/userProfile/UserProfile'
import Notfound from './components/helper/notFound/Notfound'

const App = () => {

          return (
                    <div className='App'>
                              <BrowserRouter>
                                        <UserStorage>
                                                  <Header />
                                                  <main className='AppBody'>
                                                            <Routes>
                                                                      <Route path='/' end
                                                                                element={<Home />} />

                                                                      <Route path='login/*'
                                                                                element={<Login />} />

                                                                      <Route path='/conta/*'
                                                                                element={
                                                                                          <ProtectedRouter>
                                                                                                    <User />
                                                                                          </ProtectedRouter>
                                                                                } />

                                                                      <Route path='/foto/:id' element={<Photo />} />
                                                                      <Route path='/perfil/:user' element={<UserProfile />} />
                                                                      <Route path='/*' element={<Notfound />} />
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
