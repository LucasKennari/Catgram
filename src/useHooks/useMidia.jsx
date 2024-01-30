import React from 'react'

const useMidia = (media) => {
          const [match, setMatch] = React.useState(null)


          React.useEffect(() => {
                    function changeMatch() {
                              const { matches } = window.matchMedia(media)
                              setMatch(matches)
                    }
                    window.addEventListener('resize', changeMatch)
                    return () => {
                              window.removeEventListener('resize', changeMatch)
                    }
          }, [media])

          return match
}

export default useMidia
