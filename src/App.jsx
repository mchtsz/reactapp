import React from "react"
import Navbar from "./components/Navbar"
import Pagination from "./components/Pagination"
import Addbtn from "./components/Addbtn"
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"

function App() {
  const [displayableProducts, setDisplayableProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  useEffect(() => {
    const consumerKey = "ck_69c14889997405d3e0ce02e1ab5102884ee4cd80"
    const consumerSecret = "cs_ebf670481d88d4a5232ee480458c17dac9583e04"

    const url = "https://legacy.local/wp-json/wc/v3/products/"

    const requestOptions = {
      method: "GET",
      content: "application/json",
      headers: {
        Authorization: "Basic " + btoa(consumerKey + ":" + consumerSecret),
      },
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (searchQuery === "") {
          setDisplayableProducts(data)
        } else {
          const filteredProducts = data.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          })
          setDisplayableProducts(filteredProducts)
        }
      })
      .catch((error) => console.error(error))
  }, [searchQuery])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = displayableProducts.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="App">
      <div className="Content">
        <div className="header">
          <h1>Head</h1>
        </div>

        <div className="nav">
          <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
          <Routes>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <div className="section">
          <div className="productGrid">
            {currentPosts.map((product) => (
              <div key={product.id} className="product">
                <div className="products-container">
                  <img
                    className="product-image"
                    src={product.images[0].src}
                    alt={product.name}
                  />
                  <h2 className="product-title">{product.name}</h2>
                  <p className="product-price">{product.price} kr</p>
                </div>
                <Addbtn/>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination">
          <Pagination
            totalPosts={displayableProducts.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="footer">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  )
}

export default App
