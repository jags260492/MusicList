import React from "react";
 const FriendList =(props) => {
   return (
     <div className="listWrapper"> 
     <img width="100px" className="img-responsive musicImage" src="https://www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png" alt="image placeholder"/>
     <div>
     <h5 className="heading">{props.data.title}</h5>
     <small className="duration">{props.data.supplement_information}</small><br/>
     <small className="duration" dangerouslySetInnerHTML={{__html: props.data.description}}></small><br/>
     <small><a href="#"><img src="https://img.favpng.com/7/6/13/google-play-button-computer-icons-png-favpng-iwRdqFnmb8MTbA6wXmWvff2Cw.jpg" width="15px"/>Play Vocal</a></small><br/>
     <small><a href="#">Lyrics (PDF)</a></small>
     </div>
      </div>
   )
}

export default FriendList;