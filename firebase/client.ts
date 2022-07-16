import { collection, getDocs } from 'firebase/firestore'
import db from '../credential'
import { Page } from '../hooks/useGetPages'

export const getPages = () => {
  const pagesRef = (collection(db, 'bookmarks'))
  return getDocs(pagesRef)
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data() as Page
        data.id = doc.id
        return data
      })
    })
}
