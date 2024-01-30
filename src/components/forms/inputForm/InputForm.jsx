import React from 'react'
import styles from "./inputForm.module.css"
const InputForm = ({ type, texto, setState, label, name, value, SetValue, onChange, onBlur, error }) => {

          return (
                    <div className={styles.wrapper}>

                              <label htmlFor={name} className={styles.lblInput}>
                                        {label}
                              </label>
                              <input
                                        className={styles.inputComp}
                                        id={name}
                                        name={name}

                                        type={type}
                                        value={value}
                                        placeholder={texto}
                                        onChange={onChange}
                                        onBlur={onBlur} />

                              {error && <p className={styles.error}>{error}</p>}

                    </div>

          )
}

export default InputForm
