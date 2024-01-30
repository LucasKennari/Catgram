import React from 'react'
import UserHeaderNav from '../userHeaderNav/UserHeaderNav'
import styles from './userIcon.module.css'
import Icon from '../../../imgs/icons/iconUsuario/iconUsuario.svg?react'
const UserIcon = () => {

          const [menu, setMenu] = React.useState(false)

          function handleClick(event) {

                    event.preventDefault()
                    if (event.type === 'click') {
                              setMenu(true)
                    }
          }

          return (
                    <>
                              {menu ? <UserHeaderNav /> :
                                        (<div className={styles.UserIcon}>
                                                  <Icon onClick={handleClick} />
                                        </div>)
                              }
                    </>

          )
}

export default UserIcon
