import React from 'react'
import { userContext } from '../../../useHooks/useContext'
import Head from '../../helper/head/Head'
import { Route, Routes } from 'react-router-dom'
import UserHeaderNav from '../userHeaderNav/UserHeaderNav'
import Feed from '../../feed/feed/Feed'
import Notfound from '../../helper/notFound/Notfound'
import UserPhotoPost from '../userPhotoPost/UserPhotoPost'
import UserPerfilEdit from '../userPerfilEdit/UserPerfilEdit'


const User = () => {
          const { data } = React.useContext(userContext)
          return (
                    <section className='container'>
                              <Head title="Minhas Fotos" />


                              <Routes>
                                        <Route path='/' end element={<Feed user={data.id} />} />
                                        <Route path='postar' element={<UserPhotoPost />} />
                                        {/* <Route path='perfil' element={<UserPerfilEdit />} /> */}
                                        <Route path='*' element={<Notfound />} />
                              </Routes>

                    </section>
          )
}

export default User
