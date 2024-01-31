import React from 'react'
import { PHOTOS_GET } from '../../../api/api';
import useFetch from '../../../useHooks/useFetch';

import styles from './feedPhoto.module.css'
import Loading from '../../helper/loading/Loading';
import FeedPhotosItem from '../feedPhotosItem/FeedPhotosItem';
const FeedPhoto = ({ setInfinity, setModalPhoto, user, page }) => {

          const { data, loading, error, request } = useFetch()

          React.useEffect(() => {

                    async function fetchPhotos() {

                              const total = 3
                              const { url, options } = PHOTOS_GET({ page: page, total: total, user: user })
                              const { response, json } = await request(url, options)
                              if (response && response.ok && json.length < total) {
                                        setInfinity(false)
                              }
                    }

                    fetchPhotos()
          }, [request, user, page, setInfinity]);
          if (error) return null
          if (loading) return <Loading />
          if (data)
                    return (
                              <ul className={`${styles.ulPhotos} animeParaEsquerda`}>
                                        {data.map((photo) => {
                                                  return (
                                                            <FeedPhotosItem photo={photo} key={photo.id} setModalPhoto={setModalPhoto} />

                                                  )
                                        })}

                              </ul>
                    )
          else
                    null
}

export default FeedPhoto
