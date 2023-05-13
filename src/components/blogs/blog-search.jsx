import React from "react";

const BlogSearchBar = ({searchBlog}) => {
  const [search, setSearch] = React.useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }
  const clearSearch = () => {
    setSearch("");
    searchBlog("");
  }
  return(
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
              <div className="input-group py-3">
                <input
                  name="search"
                  type="text"
                  className="form-control form-control-lg rounded-pill rounded-end"
                  id="blog-search"
                  placeholder="Search Blog.."
                  aria-label="Your Email"
                  onChange={handleSearchChange}
                  value={search}
                />
                <span className="input-group-text clear-search" onClick={clearSearch}>
                  X
                </span>
                <button
                  className="btn btn-secondary text-white btn-lg rounded-pill rounded-start px-lg-4"
                  type="submit"
                  onClick={() => searchBlog(search)}
                >
                  Search
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BlogSearchBar;