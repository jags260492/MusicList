
import './App.css';
import {useState} from "react"
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
function App() {
  const [searchValue, setSearchValue]= useState("");
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
  }])
  
  const enterPressed =(event) => {
    var code = event.keyCode || event.which;
    if(code === 13) {
      setFriendsList([...friendList, {
        name: event.target.value,
        favourite:false
      }])
      event.target.value=""
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
  
  return (
    <div className="App">
    <Header search={search}/>
    <AddFriend enterPressed={enterPressed} />
    <div className="FriendsListSection">
    {
      friendList.filter((friend)=> friend.name.toLowerCase().includes(searchValue.toLowerCase())).sort((a, b) => (a.favourite < b.favourite) * 2 - 1).map((friend, index)=>(
        <FriendList id={index} key={"friend"+index} name={friend.name} favourite={friend.favourite} toggleFav={() =>toggleFav(index)} deleteFriend={()=> deleteFriend(index)}/>
      )) 
    }
    
    </div>
    </div>
  );
}

export default App;
