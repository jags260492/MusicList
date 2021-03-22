import React from "react";
import search from "../assets/images/search.svg";
const SearchBar = (props) => {
  var expanded = false;

  const showCheckboxes = ()=> {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }
  return (
    <div className="searchWrapper"> 
      <form>
  <div className="multiselect">
    <div className="selectBox" onClick={()=>showCheckboxes()}>
      <select>
        <option>Search by</option>
      </select>
      <div className="overSelect"></div>
    </div>
    <div id="checkboxes">
      <label >
        <input type="checkbox" id="title" onChange={(value)=> props.addTofilter(value) }/>Title</label>
      <label >
        <input type="checkbox" id="description" onChange={(value)=> props.addTofilter(value) } />Description</label>
      <label >
        <input type="checkbox" id="keywords" onChange={(value)=> props.addTofilter(value) } />Keywords</label>
      <label >
        <input type="checkbox" id="all" onChange={(value)=> props.addTofilter(value) } />All</label>
      
    </div>
  </div>
</form>
<input placeholder="Search "  onChange={(value)=>props.search(value)} pattern="[A-Za-z]" className="searchbar"  />
      <img src={search}  className="img-responsive" className="searchIcon"/>
    </div>
  )
}
export default SearchBar;