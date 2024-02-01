import React from 'react'
import styles from './LoginCreate.module.css'
import Modal from '../../modal/Modal'
import RegisterForm from '../../forms/registerForrm/RegisterForm'
const LoginCreate = () => {
          React.useEffect(() => {
                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')

          }, [])
          return (
                    <section>

                              <Modal>
                                        <RegisterForm />
                              </Modal>

                    </section>
          )
}

export default LoginCreate
