import React from 'react'
import styles from './'
import ImgSkeleton from '../../helper/imgSkeleton/ImgSkeleton'
const FeedPhotosItem = ({ photo, setModalPhoto }) => {
          function handleClick() {
                    setModalPhoto(photo)
          } return (
                    <li className={styles.photo} onClick={handleClick}>


                              <ImgSkeleton src={photo.src} alt={photo.title} />

                              {/* <img src={photo.src} alt={photo.title} className={styles.img} /> */}
                              <span className={styles.view}>{photo.acessos}</span>
                    </li>
          )
}

export default FeedPhotosItem
