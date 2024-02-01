import React from 'react'
import styles from './loginForm.module.css'
import Loading from '../../helper/loading/Loading'
import { ToastContainer, toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import { userContext } from '../../../useHooks/useContext'
import Head from '../../helper/head/Head'
import Modal from '../../modal/Modal'
import LoginFormComp from '../../forms/loginForm/LoginFormComp'
const LoginForm = () => {

          React.useEffect(() => {
                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')

          }, [])

          const { login, loading, error } = React.useContext(userContext)
          const notity = () => toast.error(error)
          const navigate = useNavigate()
          if (error) {

                    notity()

          }
          if (login === true) {
                    <Navigate to='/' />
          }

          else
                    return (
                              <section >
                                        <Head title="Login" />

                                        {error && <ToastContainer
                                                  position="top-center"
                                                  autoClose={2500}
                                                  limit={1}
                                                  hideProgressBar={false}
                                                  newestOnTop={true}
                                                  closeOnClick
                                                  rtl={false}
                                                  pauseOnFocusLoss
                                                  draggable
                                                  pauseOnHover
                                                  theme='dark' />}

                                        <Modal>


                                                  {loading ? <Loading /> : <LoginFormComp />}

                                        </Modal>



                              </section>
                    )
}

export default LoginForm
