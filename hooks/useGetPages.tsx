import { useEffect, useState } from 'react'
import { getPages } from '../firebase/client'

export type Page =
{
  categories: string[],
  title: string,
  icon: string,
  url: string
  id: string
}

export type Pages = {
  pages: Page[]
}

const usePages = () => {
  const [pagesDb, setPagesDb] = useState<Page[]>()

  useEffect(() => {
    getPages().then(setPagesDb)
  }, [])

  return [pagesDb]
}

export default usePages
