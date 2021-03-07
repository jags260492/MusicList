import React from "react";
import SearchBar from "./Search";


const Header = (props) => (
<div className="Header">
<div> Friends List</div>
<SearchBar search={props.search} />

 </div>
)

export default Header;