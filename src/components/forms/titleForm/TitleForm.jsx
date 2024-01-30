import React from 'react'
import styles from './titleForrm.module.css'
const TitleForm = ({ children }) => {
          return (
                    <h4 className={styles.titleForm}>{children}</h4>
          )
}

export default TitleForm
