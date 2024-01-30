import React from 'react'
import styles from "./modal.module.css"
import { useNavigate } from 'react-router-dom'


const Modal = ({ children, }) => {

          const navigate = useNavigate()
          function handleClick() {
                    navigate('/')
          }
          return (<>
                    <section id='lgnModal' className={`
                    ${styles.modalContainer}  
                    ${styles.animeTop} ,
                   `}>
                              < div className={styles.modal} >
                                        <button className={styles.fechar} onClick={handleClick}>X</button>
                                        {children}
                              </div >
                    </section >
          </>
          )
}

export default Modal
