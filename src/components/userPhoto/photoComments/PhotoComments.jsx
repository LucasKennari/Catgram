import React from 'react'
import styles from './photoComments.module.css'
import { userContext } from '../../../useHooks/useContext'
import PhotoCommentsForm from '../photoCommentsForm/PhotoCommentsForm'
const PhotoComments = (props) => {
          const [comments, setComments] = React.useState(() => props.comments)
          const commentsSection = React.useRef(null)
          const { login } = React.useContext(userContext)

          React.useEffect(() => {
                    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
          }, [comments])

          return (<>

                    <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
                              {comments.map((comment) => {
                                        return (
                                                  <li key={comment.comment_ID}>
                                                            <b>{comment.comment_author} : </b>
                                                            <span>{comment.comment_content}</span>
                                                  </li>
                                        )
                              })}
                    </ul>
                    <div>
                              {login && <PhotoCommentsForm
                                        id={props.id}
                                        single={props.single}
                                        setComments={setComments} />}
                    </div>
          </>
          )
}

export default PhotoComments
