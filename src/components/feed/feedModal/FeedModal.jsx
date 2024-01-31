import React from 'react'
import styles from './feedModal.module.css'

import useFetch from '../../../useHooks/useFetch'
import Loading from '../../helper/loading/Loading'
import { PHOTO_GET } from '../../../api/api'
import PhotoContent from '../../userPhoto/photoContent/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
          const { data, loading, error, request } = useFetch()

          React.useEffect(() => {
                    const { url, options } = PHOTO_GET(photo.id)
                    request(url, options)
          }, [photo, request])
          function handleOutsideClick(e) {
                    if (e.target === e.currentTarget) {
                              setModalPhoto(null)
                    }
          }
          return (


                    <div className={styles.modalContainer} onClick={handleOutsideClick}>
                              {/* {error  mostrar erro} */}
                              {loading && <Loading />}
                              {data && <PhotoContent data={data} />}
                    </div>


          )

}

export default FeedModal
