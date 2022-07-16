import { useEffect, useState } from 'react'
import usePages, { Page } from './useGetPages'

type Bookmarks = {
  categoryName: string
  pages: Page[]
}
const useBookmarks = () => {
  const [pagesDb] = usePages()
  const [bookmarks, setBookmarks] = useState<Bookmarks[]>([{ categoryName: 'inbox', pages: [] }])

  const updatePages = () => {
    // const index = page.categories.map(cat => bookmarks.findIndex(bookmark => bookmark.categoryName === cat))
    // bookmarks.findIndex(bookmark => bookmark.categoryName === page.categories)
    // if (bookmark.categoryName === page.categories[])
    bookmarks.map((bookmark) => {
      return pagesDb?.map((page) => {
        if (page.categories.includes(bookmark.categoryName)) {
          return setBookmarks([
            ...bookmarks,
            {
              ...bookmark,
              pages: [page]
            }])
        }
        return setBookmarks([
          ...bookmarks,
          {
            categoryName: page.categories[0],
            pages: [...bookmark.pages, page]
          }])
      })
    })
    // if (newPage) setBookmarks(newPage)
  }
  useEffect(() => updatePages(), [pagesDb])
  useEffect(() => console.log(bookmarks))
  return bookmarks
}

export default useBookmarks
