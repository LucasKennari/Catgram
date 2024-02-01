import React from 'react'
import useFetch from '../../../useHooks/useFetch'
import styles from './PhotoCommentsForm.module.css'
import { toast } from 'react-toastify'
import { COMMENT_POST } from '../../../api/api'
import Enviar from '../../../assets/icons/iconPhotoComments/enviar.svg?react'

const PhotoCommentsForm = ({ id, setComments, single }) => {

          const [comment, setComment] = React.useState('')
          const { request, error, loading } = useFetch()
          const notify = toast.error(error)


          async function handleSubmit(e) {
                    e.preventDefault()
                    const token = window.localStorage.getItem('token')
                    const { url, options } = COMMENT_POST(id, { comment }, token)
                    const { response, json } = await request(url, options)
                    console.log(response)
                    if (response.ok) {
                              setComment('')
                              setComments((comments) => [...comments, json])
                    }
                    if (response.ok === false) {
                              return notify()
                    }
          }

          return (<>


                    <form className={`
                              ${styles.form} 
                              ${single ? styles.single : ''}
                              `}
                              onSubmit={handleSubmit}>

                              <textarea
                                        className={styles.textarea}
                                        name="comment"
                                        id="comment"
                                        cols="30" rows="10"
                                        placeholder='Comente aqui... '
                                        value={comment}
                                        onChange={({ target }) => setComment(target.value)}>

                              </textarea>

                              <button className={styles.enviar}>
                                        <Enviar />
                              </button>
                    </form>
          </>
          )
}

export default PhotoCommentsForm
