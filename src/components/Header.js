import React from "react";
import SearchBar from "./Search";


const Header = (props) => (
<div className="Header">
<div> Music List</div>
<SearchBar search={props.search} addTofilter={props.addTofilter} />

 </div>
)

export default Header;