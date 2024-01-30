import React from 'react'

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
                                                  <Icone onClick={handleClick} />
                                        </div>)
                              }
                    </>

          )
}

export default UserIcon
