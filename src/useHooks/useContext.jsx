import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/api'


export const userContext = createContext()

export const UserStorage = ({ children }) => {
          const navigate = useNavigate()
          const [data, setData] = React.useState(null)
          const [login, setLogin] = React.useState(null)
          const [loading, setLoading] = React.useState(false)
          const [error, setError] = React.useState(false)


          const userLogout = React.useCallback(async function () {
                    setData(null)
                    setError(null)
                    setLoading(false)
                    setLogin(false)
                    window.localStorage.removeItem('token')

          }, [])




          async function getUser(token) {
                    setLoading(true)
                    const { url, options } = USER_GET(token)

                    const response = await fetch(url, options)
                    const json = await response.json()

                    setData(json)
                    setLogin(true)
                    setLoading(false)
          }

          async function userLogin(username, password) {
                    try {
                              setError(true)
                              setLoading(true)
                              const { url, options } = TOKEN_POST({ username, password })
                              const tokenRes = await fetch(url, options);

                              if (!tokenRes.ok) {

                                        throw new Error(`Error:  Email e/ou senha inválidos`)
                              }

                              const json = await tokenRes.json()

                              window.localStorage.setItem('token', json.token)
                              await getUser(json.token)

                              navigate('/conta')

                    } catch (error) {
                              setError(error.message)
                              setLogin(false)
                    } finally {
                              setLoading(false)
                    }




          }

          React.useEffect(() => {
                    async function autoLogin() {
                              const token = window.localStorage.getItem('token')
                              if (token) {
                                        try {
                                                  setError(null)
                                                  setLoading(true)
                                                  const { url, options } = TOKEN_VALIDATE_POST(token)
                                                  const response = await fetch(url, options);

                                                  if (!response.ok) {
                                                            throw new Error('Token inválido')
                                                  }
                                                  await getUser(token)

                                        } catch (error) {
                                                  userLogout()
                                        } finally {
                                                  setLoading(false)
                                        }

                              } else {
                                        setLogin(false)
                              }


                    }
                    autoLogin()
          }, [userLogout])

          return (
                    < userContext.Provider value={{ userLogin, data, loading, login, error, userLogout }}>
                              {children}
                    </userContext.Provider>
          )
}


