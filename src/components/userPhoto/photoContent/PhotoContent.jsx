import React from 'react'
import styles from './photoContent.module.css'
import { userContext } from '../../../useHooks/useContext';
import ImgSkeleton from '../../helper/imgSkeleton/ImgSkeleton';
import PhotoDelete from '../photoDelete/PhotoDelete';
import { Link } from 'react-router-dom';
import PhotoComments from '../photoComments/PhotoComments';
const PhotoContent = ({ data, single }) => {
          const { photo, comments } = data;
          const user = React.useContext(userContext)
          return (
                    <div className={`
                    ${styles.photo} 
                    ${single ? styles.single : ''}
                    `}>

                              <div className={styles.img}>
                                        <ImgSkeleton src={photo.src} alt={photo.title} />

                              </div>

                              <div className={styles.details}>
                                        <div>

                                                  <div className={styles.barra}>
                                                            <p className={styles.author}>

                                                                      {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : (

                                                                                <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                                                                      )}


                                                                      <span className={styles.visualizacao}>{photo.acessos}</span>
                                                            </p>

                                                  </div>
                                                  <h1 className={styles.title}>
                                                            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                                                  </h1>
                                        </div>
                              </div>
                              <PhotoComments id={photo.id} single={single} comments={comments} />
                    </div>
          )
}
export default PhotoContent
