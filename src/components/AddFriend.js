import React from "react";

const AddFriend = (props) => {

  return (
    <div className="inputWrapper"> 
      <input placeholder="Add a new friend" className="addbar" onKeyPress={(event) => props.enterPressed(event)} />
    </div>
  )
}
export default AddFriend;