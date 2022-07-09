import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import db from '../../credential'

const useGetAllCategory = () => {
  const [category, setCategory] = useState<string[]>()

  const categorySubscribe = () => {
    const categoryRef = doc(db, 'bookmarks', 'category')
    onSnapshot(categoryRef, (cat) => {
      const category = cat.data() as {name: []}
      setCategory(category.name)
    })
  }
  useEffect(() => categorySubscribe(), [])

  return [category]
}

export default useGetAllCategory
