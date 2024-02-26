import React from 'react'
import styles from './header.module.css'
import { userContext } from '../../useHooks/useContext'
import { NavLink } from 'react-router-dom'

import IconHeader from "../../assets/icons/iconHeader/iconHeader.svg?react"
import UserIcon from '../userAccount/userIcon/UserIcon'


const Header = () => {

          const [menu, setMenu] = React.useState(false)
          const { data, userLogout } = React.useContext(userContext)
          let mod = React.useRef()
          React.useEffect(() => {
                    document.getElementById('lgnModal')

          }, [])

          function handleClick() {
                    mod.current.classList.add('ativo')
          }

          // function handleLogout(event) {
          //           event.preventDefault()
          //           userLogout()
          // }

          return (
                    <div className={styles.divHeader}>

                              <header className={styles.header} >
                                        <nav className={`${styles.nav} container`}>


                                                  <NavLink to="/" end
                                                            aria-label='Catgram - Home'
                                                            className={styles.logo}>
                                                            <IconHeader />
                                                  </NavLink>

                                                  {data ?
                                                            <NavLink to="conta" end
                                                                      className={styles.login} >


                                                                      {<UserIcon />}

                                                            </NavLink> :

                                                            <NavLink id='lgn' to="login" end
                                                                      className={styles.login}
                                                                      ref={mod}
                                                                      onClick={handleClick}

                                                            >
                                                                      Login / Cadastrar-se
                                                            </NavLink>
                                                  }

                                        </nav>
                              </header>
                    </div>
          )
}

export default Header
