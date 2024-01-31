import React from 'react'
import useFetch from '../../../useHooks/useFetch'
import { PHOTO_GET } from '../../../api/api'
import { useParams } from 'react-router-dom'
import Loading from '../../helper/loading/Loading'
import Head from '../../helper/head/Head'
import PhotoContent from '../photoContent/PhotoContent'

const Photo = () => {
          const { id } = useParams()
          const { request, data, loading, error } = useFetch()

          React.useEffect(() => {
                    const { url, options } = PHOTO_GET(id)
                    request(url, options)
          }, [request, id])

          if (error) return error
          if (loading) return <Loading />
          if (data) {
                    return (
                              <section className='container'>
                                        <Head title={data.photo.title} />
                                        <PhotoContent single={true} data={data} />
                              </section>
                    )
          } else null
}

export default Photo
