import React from 'react'
import UserHeaderNav from '../userHeaderNav/UserHeaderNav'
import styles from './userIcon.module.css'
import IconPerfil from '../../../assets/icons/iconsNav/iconPerfil.svg?react'

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
                                                  <IconPerfil onClick={handleClick} />
                                        </div>)
                              }
                    </>

          )
}

export default UserIcon
