import React, { useState } from "react"
import { Form } from "./styles"
import searchIcon from "../../Images/search.svg"
import { navigate } from "gatsby-link"

const SearchBar = ({ articles }) => {
  const [userQuery, setUserQuery] = useState("")

  const handleSubmit = evt => {
    evt.preventDefault()
    const searchQuery = articles.nodes.filter(post => {
      const { title } = post
      return title.toLowerCase().includes(userQuery.toLowerCase())
    })
    navigate("/search", { state: { userQuery, searchQuery } })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userQuery}
        onChange={e => setUserQuery(e.target.value)}
      />
      <button type="submit">
        <img src={searchIcon} alt="search-icon" />
      </button>
    </Form>
  )
}

export default SearchBar
