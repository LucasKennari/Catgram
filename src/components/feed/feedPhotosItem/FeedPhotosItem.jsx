import React from 'react'
import styles from './feedPhotosItem.module.css'
import ImgSkeleton from '../../helper/imgSkeleton/ImgSkeleton'
const FeedPhotosItem = ({ photo, setModalPhoto }) => {
          function handleClick() {
                    setModalPhoto(photo)
          } return (
                    <li className={styles.photo} onClick={handleClick}>


                              <ImgSkeleton src={photo.src} alt={photo.title} />


                              <span className={styles.view}>{photo.acessos}</span>
                    </li>
          )
}

export default FeedPhotosItem
