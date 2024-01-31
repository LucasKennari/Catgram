import React from 'react'
import { userContext } from '../../../useHooks/useContext'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
          const { login } = React.useContext(userContext)
          if (login === true) {
                    return children
          } else if (login === false) {
                    return <Navigate to='/login' />
          } else return <></>

}

export default ProtectedRouter
