import React from 'react'
import PropTypes from 'prop-types'
import styles from './feed.module.css'
import FeedModal from '../feedModal/FeedModal'
import FeedPhoto from '../feedPhoto/FeedPhoto'
const Feed = ({ user }) => {
          const [modalPhoto, setModalPhoto] = React.useState(null)
          const [page, setPage] = React.useState([1])
          const [infinity, setInfinity] = React.useState(true)

          React.useEffect(() => {
                    let wait = false
                    function infinityScrol() {
                              if (infinity) {

                                        const scroll = window.scrollY
                                        const height = document.body.offsetHeight - window.innerHeight;
                                        if (scroll > height * 0.75 && !wait) {
                                                  setPage((page) => [...page, page.length + 1])
                                                  wait = true;
                                                  setTimeout(() => {
                                                            wait = false;
                                                  }, 600)
                                        }

                              }

                    }
                    window.addEventListener('wheel', infinityScrol)
                    window.addEventListener('scroll', infinityScrol)
                    return () => {
                              window.removeEventListener('wheel', infinityScrol)
                              window.removeEventListener('scroll', infinityScrol)
                    }
          }, [infinity])

          return (
                    <div className={`${styles.feed}`}>

                              {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
                              {page.map((page) => {
                                        return (
                                                  <FeedPhoto key={page}
                                                            user={user}
                                                            page={page}
                                                            setModalPhoto={setModalPhoto}
                                                            setInfinity={setInfinity} />
                                        )
                              }
                              )}
                    </div>
          )
}
Feed.defaultProp = {
          user: 0
}
Feed.PropTypes = {
          user: PropTypes.oneOfType([
                    PropTypes.string.isRequired,
                    PropTypes.number.isRequired
          ])
}
export default Feed
