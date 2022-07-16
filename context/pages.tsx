import { createContext, ReactNode, useState } from 'react'
import { Pages } from '../hooks/useGetPages'

type PagesInCategroy = {
  categories: {
    name: string
    pages:[ {
      categories: string[],
      title: string,
      icon: string,
      url: string
    }]
  }
}

const PagesContext = createContext({} as PagesInCategroy)

const PagesProvider = (children: ReactNode) => {
  const [pagesInCategory, setPagesInCategory] = useState<PagesInCategroy>()

  const loadPages = (pages: Pages) => {
    const pagesFormat = pages.map((page) => {
      page.categories.map((cat) => {
        setPagesInCategory({ 
          ...pagesInCategory,
          name: cat,
          pages: [...pages, page]
        })
      })
      return {name: }
    })
    setPagesInCategory(pagesFormat)
  }

  return (
    <PagesContext.Provider value={{} as PagesInCategroy}>
      {children}
    </PagesContext.Provider>
  )
}

export default PagesProvider
