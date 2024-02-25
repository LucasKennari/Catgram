import React from 'react'
import styles from "./userHeaderNav.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../../../useHooks/useContext'


import Feed from '../../../assets/icons/iconsNav/feed.svg?react'
import Adicionar from '../../../assets/icons/iconsNav/adicionar.svg?react'
import Perfil from '../../../assets/icons/iconsNav/iconPerfil.svg?react'
import Sair from '../../../assets/icons/iconsNav/sair.svg?react'
import UserIcon from '../userIcon/UserIcon'
import CloseMenu from '../../../assets/icons/iconsNav/closeMenu.svg?react'
const UserHeaderNav = () => {
          const navigate = useNavigate()
          const { userLogout } = React.useContext(userContext)
          const [mobile, setMobile] = React.useState(null)
          const [menu, setMenu] = React.useState(!false)

          function handleClick(e) {
                    e.preventDefault()
                    userLogout()
                    navigate('/login')
          }
          function handleMenu(evt) {
                    evt.preventDefault()
                    if (evt.type === 'click') {
                              setMenu(!true)
                    }
          }



          return (
                    <>

                              {menu ? <nav id='userHeadNav'
                                        className={`${styles.headerNaV} animeParaEsquerda`}>
                                        <button onClick={handleMenu} >
                                                  <CloseMenu className={styles.btnImg} />


                                        </button>

                                        <NavLink to='/conta' end>
                                                  <Feed />
                                                  {mobile && 'Minhas Fotos'}
                                        </NavLink>

                                        <NavLink to='/conta/postar'>

                                                  <Adicionar />
                                                  {mobile && 'Adicionar Fotos'}
                                        </NavLink>

                                        {/* <NavLink to='/conta/perfil'>
                                                  <Perfil />
                                                  {mobile && 'Editar perfil'}
                                        </NavLink> */}

                                        <button onClick={handleClick}>
                                                  <Sair />
                                        </button>

                              </nav > : <nav id='userHeadNav' className={`${styles.headerNaV} animeParaDireita`}>
                                        <UserIcon />
                              </nav>

                              }
                    </>

          )
}

export default UserHeaderNav
