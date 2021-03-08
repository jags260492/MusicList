import React from "react";
import trashIcon from "../assets/images/001-delete.png";
import starFilled from "../assets/images/002-star.png";
import star from "../assets/images/003-star-1.png";
 const FriendList =(props) => {
   return (
     <div className="listWrapper"> 
     
     <h5 className="heading">{props.name}</h5>
     {/* <div className="heading">is your friend</div> */}
     
     <div className="actionWrap">
       <button className="actionBtn"> <img src={props.favourite? starFilled: star} alt="favourite" className="img-responsive" onClick={props.toggleFav} /> </button>
       <button className="actionBtn"> <img src={trashIcon} alt="delete" className="img-responsive" onClick={props.deleteFriend}/> </button>
       </div>
      </div>
   )
}

export default FriendList;