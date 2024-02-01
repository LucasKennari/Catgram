import React from 'react'
import InputForm from '../../forms/inputForm/InputForm'
import BtnForm from '../../forms/btnForm/BtnForm'
import { PASSWORD_RESET } from '../../../api/api'
import useForm from '../../../useHooks/useForm'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../useHooks/useFetch'
import Loading from '../../helper/loading/Loading'
import Head from '../../helper/head/Head'

const LoginPassReset = () => {
          const [login, setLogin] = React.useState('')
          const [key, setKey] = React.useState('')

          const password = useForm()
          const navigate = useNavigate()
          const { request, error, loading, data } = useFetch()

          React.useEffect(() => {
                    const params = new URLSearchParams(window.location.search)
                    const key = params.get('key')
                    const login = params.get('login')

                    if (key) setKey(key)
                    if (login) setLogin(login)
          }, [])

          async function handleSubmit(e) {
                    e.preventDefault()

                    const { url, options } = PASSWORD_RESET(
                              {
                                        login: login,
                                        key: key,
                                        password: password.value
                              }
                    )
                    const { json, response } = await request(url, options)

                    if (response.ok) { navigate('/login') }

          }
          return (
                    <section className='container mainContainer'>

                              <Head title="Resete a senha" />

                              <h1 className='title'>Resete a senha</h1>
                              <form onSubmit={handleSubmit}>

                                        <InputForm
                                                  texto='Nova senha'
                                                  type='password'
                                                  name='password' {...password} />
                                        {loading ? <BtnForm disabled={true}>< Loading /></BtnForm>
                                                  :
                                                  <BtnForm>Mudar senha</BtnForm>}
                              </form>
                              {error && console.log(error)}
                    </section>
          )
}

export default LoginPassReset
