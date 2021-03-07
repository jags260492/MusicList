import React from "react";
import search from "../assets/images/search.svg";
const SearchBar = (props) => {

  return (
    <div className="searchWrapper"> 
      <input placeholder="Search friends"  onChange={(value)=>props.search(value)} pattern="[A-Za-z]" className="searchbar"  />
      <img src={search}  className="img-responsive" className="searchIcon"/>
    </div>
  )
}
export default SearchBar;