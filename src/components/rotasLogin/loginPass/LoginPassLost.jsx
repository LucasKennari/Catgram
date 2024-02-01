import React from 'react'
import { PASSWORD_LOST } from '../../../api/api'
import useFetch from '../../../useHooks/useFetch'
import useForm from '../../../useHooks/useForm'
import TitleForm from '../../forms/titleForm/TitleForm'
import InputForm from '../../forms/inputForm/InputForm'
import BtnForm from '../../forms/btnForm/BtnForm'
import Loading from '../../helper/loading/Loading'
import Head from '../../helper/head/Head'

const LoginPassLost = () => {
          const login = useForm()
          const { data, loading, error, request } = useFetch()

          async function handleSubmit(e) {
                    e.preventDefault()
                    console.log(login)
                    if (login.validate()) {

                              const { url, options } = PASSWORD_LOST(
                                        {
                                                  login: login.value,
                                                  url: window.location.href.replace('perdeu', 'resetar')

                                        }
                              )
                              const { json, response } = await request(url, options)

                    }
          }

          return (
                    <section className='container mainContainer' style={{ display: "flex" }}>

                              <Head title="Perdeu a senha" />

                              {data ? <p style={{ color: '#4c1' }}>Email enviado </p> :
                                        <form onSubmit={handleSubmit} >
                                                  (     <TitleForm>Perdeu a senha?</TitleForm>
                                                  <InputForm

                                                            texto="Email/Login"
                                                            type="text"
                                                            name="login"
                                                            {...login}
                                                  />

                                                  {loading ? <BtnForm disabled={true}> <Loading /></BtnForm> :
                                                            <BtnForm>Resetar senha</BtnForm>})

                                        </form>
                              }
                    </section>
          )
}
export default LoginPassLost
