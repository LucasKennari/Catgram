import React from 'react'
import { userContext } from '../../../useHooks/useContext'
import Head from '../../helper/head/Head'
import { Route, Routes } from 'react-router-dom'
import UserHeaderNav from '../userHeaderNav/UserHeaderNav'


const User = () => {
          const { data } = React.useContext(userContext)
          return (
                    <section className='container'>
                              <Head title="Minhas Fotos" />


                              <Routes>
                                        {/* <Route path='/' end element={<Feed user={data.id} />} />
                                        <Route path='postar' element={<UserPhotoPost />} />
                                        <Route path='perfil' element={<UserProfileEdit />} />
                                        <Route path='*' element={<NotFound />} /> */}
                              </Routes>
                    </section>
          )
}

export default User
