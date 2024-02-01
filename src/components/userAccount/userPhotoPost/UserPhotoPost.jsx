import React from 'react'
import styles from './userPhotoPost.module.css'
import useForm from '../../../useHooks/useForm'
import useFetch from '../../../useHooks/useFetch'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { PHOTO_POST } from '../../../api/api'
import Loading from '../../helper/loading/Loading'
import Head from '../../helper/head/Head'
import InputForm from '../../forms/inputForm/InputForm'
import BtnForm from '../../forms/btnForm/BtnForm'
const UserPhotoPost = () => {
          const nome = useForm()
          const peso = useForm('number')
          const idade = useForm('number')
          const [img, setImg] = React.useState({})

          const { loading, data, error, request } = useFetch()
          const notify = toast.error(error)

          const navigate = useNavigate()

          React.useEffect(() => {

                    if (data) {
                              navigate('/')
                    }

          }, [data, navigate])

          async function handleSubmit(event) {
                    event.preventDefault()
                    if (error) {
                              return notify()

                    }
                    const formData = new FormData()
                    formData.append('img', img.raw)
                    formData.append('nome', nome.value)
                    formData.append('peso', peso.value)
                    formData.append('idade', idade.value)

                    const token = window.localStorage.getItem('token')
                    const { url, options } = PHOTO_POST(token, formData)
                    const { response } = await request(url, options)


          }

          function handleImgChange({ target }) {
                    setImg({
                              preview: URL.createObjectURL(target.files[0]),
                              raw: target.files[0],
                    })

          }


          return (<>

                    <section className={`${styles.photoPost} container mainContainer animeLeft`} >

                              <Head title="Poste sua foto" />

                              {loading ? <Loading /> :
                                        <form onSubmit={handleSubmit}>

                                                  <InputForm texto='Nome' type='text' name='nome' {...nome} />
                                                  <InputForm texto='Peso' type='number' name='peso' {...peso} />
                                                  <InputForm texto='Idade' type='number' name='idade' {...idade} />

                                                  <input type='file' name='img' id='img' onChange={handleImgChange} className={styles.file} />
                                                  <BtnForm>ENVIAR</BtnForm>
                                        </form>
                              }
                              <div>
                                        {img.preview &&
                                                  <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')` }}>

                                                  </div>}
                              </div>
                    </section>
                    {error && <ToastContainer
                              position="top-center"
                              autoClose={2500}
                              limit={1}
                              hideProgressBar={false}
                              newestOnTop={true}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme='dark' />}
          </>
          )
}

export default UserPhotoPost
