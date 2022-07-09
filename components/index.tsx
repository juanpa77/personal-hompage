import useGetAllCategory from '../pages/hooks/useGetCategory'

const CategoryList = () => {
  const [category] = useGetAllCategory()
  console.log(category)
  return (
    <div></div>
  )
}

export default CategoryList
