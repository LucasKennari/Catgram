import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../../helper/head/Head'
import Feed from '../../feed/feed/Feed'

const UserProfile = () => {
          const { user } = useParams()
          return (

                    <section className='container mainContainer'>
                              <Head title={user} description="Nome do site, com o nome do usuário" />
                              <h1 className='title'>{user}</h1>
                              <Feed user={user} />
                    </section>
          )
}


export default UserProfile
