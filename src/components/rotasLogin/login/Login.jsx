import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './login.module.css'
import LoginForm from '../../forms/loginForm/LoginFormComp'
import LoginModal from '../loginModal/LoginModal'

// import LoginPasswordLost from '../loginPass/LoginPasswordLost'




const Login = () => {

          return (
                    <section className={styles.login}>
                              <div >
                                        <Routes>
                                                  <Route path='/' element={<LoginModal />} />
                                                  {/* <Route path='cadastro' element={<LoginCreate />} />
                                                  <Route path='perdeu' element={<ModalPassLost />} />
                                                  <Route path='resetar' element={<LoginResetPassword />} />
                                                  <Route path='*' element={<NotFound />} /> */}

                                        </Routes>

                              </div>
                    </section>
          )
}

export default Login
