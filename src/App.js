
import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
function App() {
  const [searchValue, setSearchValue]= useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [indexOfLastFriend, setIndexOfLastFriend] = useState(currentPage * 4);
  const [indexOfFirstFriend, setIndexOfFirstFriend] = useState(indexOfLastFriend - 4);
  const [friendList, setFriendsList] = useState([{
    name:"Jagruti Lodaya",
    favourite: true
  },
  {
    name:"Karan Shah",
    favourite: false
  },
  {
    name:"Alan Walker",
    favourite: true
  },
  {
    name:"Jennifer Lopez",
    favourite: true
  },
  {
    name:"John",
    favourite: true
  }])
  
  const enterPressed =(event) => {
    var code = event.keyCode || event.which;
    let pattern= new RegExp("^[a-z A-Z]*$");
    if(pattern.test(event.target.value) ) {
      if(code === 13){
        setFriendsList([...friendList, {
          name: event.target.value,
          favourite:false
        }])
        event.target.value=""
      }
      event.target.style.border="2px solid #1387a82e"
    } 
    else{
      event.target.style.border="2px solid red";
    }
  }
  const deleteFriend= (id) =>{
    setFriendsList(friendList.filter(((friend, index) => index!= id )))
  }
  const toggleFav= (id) =>{
    let toggledList = friendList.map((friend, index) => index == id? {...friend, favourite : !friend.favourite } : {...friend, favourite : friend.favourite } );
    setFriendsList(toggledList);
  }
  
  const search= (event) =>{
    setSearchValue(event.target.value);
  }
  
  useEffect(()=>{
    setIndexOfLastFriend( currentPage * 4);
  },[currentPage]); 

  useEffect(()=>{
    setIndexOfFirstFriend(indexOfLastFriend - 4);
    console.log(currentPage, "indexOfLastFriend", indexOfLastFriend, "indexOfFirstFriend", indexOfFirstFriend);
  },[indexOfLastFriend]); 
               
const displayPage= () => { 

  let divs = [];
   for(let i = 1; i <= Math.ceil(friendList.length/4); i++) {
        divs.push (<div onClick={()=> setCurrentPage(i)} className="page" key={i} >{i}</div>)
    }
    return divs;
 } 

  return (
    <div className="App">
    <Header search={search}/>
    <AddFriend enterPressed={enterPressed} />
    <div className="FriendsListSection">
    {
      friendList.filter((friend)=> friend.name.toLowerCase().includes(searchValue.toLowerCase()))
      // .sort((a, b) => (a.favourite < b.favourite) * 2 - 1)
      .slice(indexOfFirstFriend, indexOfLastFriend)
      .map((friend, index)=>
         <FriendList id={index} key={"friend"+index} name={friend.name} favourite={friend.favourite} toggleFav={() =>toggleFav(index)} deleteFriend={()=> deleteFriend(index)}/>
      ) 
    }

    </div>
    {
      friendList.length>4 && searchValue=="" ? (  <div className="pagination">{displayPage()} </div> ) : null
    }
  

    </div>
  );
}

export default App;
