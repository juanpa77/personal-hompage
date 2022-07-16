// import CategoryList from '..'
import useBookmarks from '../../hooks/useBookmarks'
import Wrapper, { Item, List } from './styled'

const Bookmarks = () => {
  const pagesInCategory = useBookmarks()
  console.log(pagesInCategory)
  return (
    <Wrapper>
      <List>
        {pagesInCategory?.map((bookmark, i) => {
          // console.log(bookmark)
          return <Item key={i} value={bookmark.categoryName}>{bookmark.categoryName}</Item>
        })}
      </List>
      {/* <List>
        {pagesInCategory.map((bookmark, i) => {
          return (
            <Item key={i}>
              {bookmark.pages.map((page) => {
                return page.title
              })}
            </Item>
          )
        })}
      </List> */}
    </Wrapper>
  )
}

export default Bookmarks
