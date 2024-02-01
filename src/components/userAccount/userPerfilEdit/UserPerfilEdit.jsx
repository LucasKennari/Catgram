import React from 'react'
import styles from './userPerfilEdit.module.css'
import InputForm from '../../forms/inputForm/InputForm'
import Head from '../../helper/head/Head'
const UserPerfilEdit = () => {
          return (
                    <section>
                              <Head title="Editar o perfil" />
                              <div className={`${styles.perfil} container`}>
                                        <h5 className='title'>Perfil</h5>
                                        <div className={styles.informacoes}>
                                                  <InputForm texto='Usuário' />
                                                  <InputForm texto='E-mail' />
                                                  <InputForm texto=' Nova senha' />
                                                  <InputForm texto='Confirme a senha' />
                                        </div>

                                        <div className={`${styles.foto}`} >

                                        </div>
                                        <div className={styles.informacoes2}>
                                                  <InputForm texto='Data de nascimento' />
                                                  <InputForm texto='Telefone' />
                                                  <InputForm texto='Rede social' />
                                        </div>
                              </div>
                    </section>
          )
}

export default UserPerfilEdit
