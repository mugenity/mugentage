import React from "react"
import useArticleQuery from "../hooks/useArticlesQuery"
import Hero from "../components/Hero"
import Layout from "../Layout"
import Articles from "../components/Articles"
import Articles2 from "../components/Articles2"
import InstagramFeed from "../components/InstagramFeed"
import Quote from "../components/Quote"
import NewsLetter from "../components/NewsLetter"

const HomePage = () => {
  const data = useArticleQuery()
  const { allWpPost } = data
  const limitArticles = allWpPost.nodes.slice(0, 8)

  return (
    <Layout>
      <Hero />
      <Articles articles={limitArticles} />
      <Quote />
      <Articles2 />
      <NewsLetter />
      <InstagramFeed />
    </Layout>
  )
}

export default HomePage
