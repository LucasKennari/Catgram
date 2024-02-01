import React from 'react'
import Modal from '../../modal/Modal'
import LoginPassLost from './LoginPassLost'

const ModalLoginPass = () => {

          React.useEffect(() => {
                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')

          }, [])
          return (
                    <>
                              <Modal>
                                        <LoginPassLost />
                              </Modal>
                    </>
          )
}

export default ModalLoginPass
