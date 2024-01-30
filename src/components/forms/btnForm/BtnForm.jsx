import React from 'react'
import { userContext } from '../../../useHooks/useContext'
import styles from './btnForm.module.css'
import Loading from '../../helper/loading/Loading'
const BtnForm = ({ children, disabled, ...props }) => {

          const { loading } = React.useContext(userContext)

          return (
                    <button className={styles.btnLogin} disabled={disabled}>

                              {loading ? < Loading /> : children}

                    </button>
          )
}

export default BtnForm
