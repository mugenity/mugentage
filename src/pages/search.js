import React, { useState, useEffect } from "react"
import Layout from "../Layout"
import { SearchBox, StyledImage } from "../search.style"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import RecentPost from "../components/RecentPost"

const SearchPage = ({ location }) => {
  const { userQuery, searchQuery } = location.state

  const [searchData, setSearchData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  const [pageNumberLimit, setPageNumberLimit] = useState(3)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const handleClick = event => {
    setCurrentPage(Number(event.target.id))
  }

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(searchData.length / itemsPerPage); i++) {
    pages.push(i)
  }

  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={handleNext} onKeyDown={handleNext}>
        &hellip;
      </li>
    )
  }
  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li onClick={handlePrevious} onKeyDown={handlePrevious}>
        &hellip;
      </li>
    )
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = searchData.slice(indexOfFirstItem, indexOfLastItem)

  const renderPageNumbers = pages.map((number, index) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={index}
          id={number}
          onClick={handleClick}
          onKeyDown={handleClick}
          className={`${number === currentPage && "active_page"}`}
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })

  useEffect(() => {
    setSearchData(searchQuery)
  }, [searchQuery])

  const renderSearch = data => {
    return (
      <div className="filtered_articles">
        {userQuery || !userQuery ? (
          data.map(article => {
            const { title, id, uri, excerpt, featuredImage } = article
            const thumbnail = getImage(featuredImage?.node?.localFile)

            return (
              <div className="article_box" key={id}>
                <div className="thumbnail">
                  <Link to={`/blog${uri}`}>
                    <StyledImage image={thumbnail} alt={`${title} image`} />
                  </Link>
                </div>
                <div className="info">
                  <Link to={`/blog${uri}`}>{title}</Link>
                  <div className="excerpt"> {parse(excerpt)}</div>
                </div>
              </div>
            )
          })
        ) : (
          <div>0 article displayed</div>
        )}
      </div>
    )
  }

  return (
    <Layout>
      <SearchBox>
        <div className="title">
          <h1>
            Search results for : <span>{userQuery}</span>
          </h1>
        </div>
        <div className="content_container">
          {renderSearch(currentItems)}
          <RecentPost />
        </div>

        <ul className="page_numbers">
          <li>
            <button
              onClick={handlePrevious}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li>
            <button
              onClick={handleNext}
              disabled={currentPage === pages.length ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </SearchBox>
    </Layout>
  )
}

export default SearchPage
