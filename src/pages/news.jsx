import { useEffect, useContext } from "react"
import NewsTableContainer from "../components/newsTableContainer"
import { NewsApiData } from "../contextApi/news/newsContextApi"

const News = () => {
  const { processGetAllNews } = useContext(NewsApiData)

  useEffect(() => {
    processGetAllNews()
  }, [])

  return (
    <div>
      <NewsTableContainer />
    </div>
  )
}

export default News
