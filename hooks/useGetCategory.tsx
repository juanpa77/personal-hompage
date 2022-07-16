/* import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import db from '../credential'

const useGetAllCategory = () => {
  const [categories, setCategories] = useState<string[]>()

  const categorySubscribe = () => {
    const categoryRef = doc(db, 'bookmarks', 'category')
    onSnapshot(categoryRef, (cat) => {
      const category = cat.data() as {name: []}
      setCategories(category.name)
    })
  }
  useEffect(() => categorySubscribe(), [])

  return [categories]
}

export default useGetAllCategory
 */
