import { useState, useEffect } from 'react'

// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'
const PREFIX_CAT_ENDPOINT = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [urlImage, setUrlImage] = useState()

  useEffect(() => {
    if (!fact) return
    const text = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${text}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setUrlImage(url)
      })
  }, [fact])
  return { urlImage: `${PREFIX_CAT_ENDPOINT}${urlImage}` }
}
