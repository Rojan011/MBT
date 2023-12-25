import React from "react";
import { useState } from "react";
import Header from "../Home/Header";
import SearchBar from "../Home/SearchBar";
import BlogList from "../Home/BlogList";
import { blogList } from "../data/data";
import EmptyList from "../common/EmptyList";

//This is the home page of blog
const Main = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  //To Submit Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  //Inorder to search blogs by category in the health advices section
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  //Inorder to clear search
  const handleClearSearch=()=>{
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Blog List & Empty List */}
      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Main;
