import React from 'react'
import Head from '../components/helper/head/Head'
import Feed from '../components/feed/feed/Feed'

const Home = () => {

          return (
                    <section className='container '>
                              <Head title="Feed" description="Nome do site, com o feed de fotos" />
                              <Feed />
                    </section>
          )
}

export default Home
