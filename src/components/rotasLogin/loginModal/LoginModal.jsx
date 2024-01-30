import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { userContext } from '../../../useHooks/useContext'
import { Navigate, useNavigate } from 'react-router-dom'
import styles from './loginModal.module.css'
import Modal from '../../modal/Modal'
import Loading from '../../helper/loading/Loading'
import LoginFormComp from '../../forms/loginForm/LoginFormComp'

const LoginModal = () => {
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
                                        {/* <Head title="Login" /> */}

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

export default LoginModal
