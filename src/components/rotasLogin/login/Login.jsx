import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './login.module.css'
import LoginForm from '../../forms/loginForm/LoginFormComp'
import LoginModal from '../loginModal/LoginModal'
import LoginCreate from '../loginCreate/LoginCreate'
import ModalLoginPass from '../loginPass/ModalLoginPass'
import LoginPassReset from '../loginPass/LoginPassReset'
import Notfound from '../../helper/notFound/Notfound'

// import LoginPasswordLost from '../loginPass/LoginPasswordLost'




const Login = () => {

          return (
                    <section className={styles.login}>
                              <div >
                                        <Routes>
                                                  <Route path='/' element={<LoginModal />} />
                                                  <Route path='cadastro' element={<LoginCreate />} />
                                                  <Route path='perdeu' element={<ModalLoginPass />} />
                                                  <Route path='resetar' element={<LoginPassReset />} />
                                                  <Route path='*' element={<Notfound />} />

                                        </Routes>

                              </div>
                    </section>
          )
}

export default Login
