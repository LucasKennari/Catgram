import React from 'react'
import styles from './photoDelete.module.css'
import useFetch from '../../../useHooks/useFetch'
import { PHOTO_DELETE } from '../../../api/api'
const PhotoDelete = ({ id }) => {
          const { request, loading, error } = useFetch()

          async function handleClick() {
                    const confirm = window.confirm('Tem certeza?')
                    if (confirm) {
                              const token = window.localStorage.getItem('token')
                              const { url, options } = PHOTO_DELETE(id, token)
                              const { response } = await request(url, options)
                              if (response.ok) {

                                        window.location.reload()

                              }

                    }
          }

          return (<>


                    <button className={styles.btnDelete} onClick={handleClick}>Deletar </button>
          </>
          )
}

export default PhotoDelete
