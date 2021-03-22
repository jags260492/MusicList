
import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header";
import MusicList from "./components/MusicList";
import music from "./music.json";
function App() {
  const [searchValue, setSearchValue]= useState("");
  const [filterOptions, setFilterOption]= useState([]);
  // const [searchCondition, setSearchCondition]= useState( music.data.toLowerCase().includes(searchValue.toLowerCase()))
  const [currentPage, setCurrentPage] = useState(1)
  const [indexOfLastFriend, setIndexOfLastFriend] = useState(currentPage * 4);
  const [indexOfFirstFriend, setIndexOfFirstFriend] = useState(indexOfLastFriend - 4);
  const [musicList, setMusicList] = useState(music.assets)


  
  const search= (event) =>{
    if(event.target.value.length){

   
    var content= document.getElementsByTagName("h5");
    let searchExp= new RegExp(event.target.value, "ig");
    let matches = Object.values(content).filter(x=> x.innerHTML.match(searchExp));
    if(matches){
      Object.values(matches).forEach(element => {
        element.innerHTML= element.innerHTML.replace(searchExp, function(match){
          return "<span class='highlight'>"+match+"</span>"
        })
            }); 
    }
    else{
      let content= document.getElementsByClassName("highlight");
      Object.values(content).map(x=>  x.classList.remove("highlight"));
      
    }
  }
  else{
    let content= document.getElementsByClassName("highlight");
    Object.values(content).map(x=>  x.classList.remove("highlight"));
  }
    setSearchValue(event.target.value);
  }
  const addTofilter= (event) =>{
    event.target.checked ? filterOptions.push(event.target.id) : filterOptions.filter(x => x==event.target.id)
    setFilterOption(filterOptions)
  }
  const getSeachCondition= (music) =>{
    if(filterOptions.includes("all")){
      return  music.title.toLowerCase().includes(searchValue.toLowerCase()) ||  music.description.includes(searchValue.toLowerCase()) || music.keywords.includes(searchValue.toLowerCase())
    }
    else if(filterOptions.includes("title")){
      if(filterOptions.includes("description")){
        if(filterOptions.includes("keywords")){
          return  music.title.toLowerCase().includes(searchValue.toLowerCase()) ||  music.description.includes(searchValue.toLowerCase()) || music.keywords.includes(searchValue.toLowerCase())
        }
        return  music.title.toLowerCase().includes(searchValue.toLowerCase()) ||  music.description.includes(searchValue.toLowerCase())
      }
      if(filterOptions.includes("keywords")){
        return  music.title.toLowerCase().includes(searchValue.toLowerCase()) || music.keywords.includes(searchValue.toLowerCase())
      }
      return  music.title.toLowerCase().includes(searchValue.toLowerCase())
    }
    else if(filterOptions.includes("description")){
      if(filterOptions.includes("keywords")){
        return   music.description.includes(searchValue.toLowerCase()) || music.keywords.includes(searchValue.toLowerCase())
      }
      return  music.title.toLowerCase().includes(searchValue.toLowerCase())
    }
    else if(filterOptions.includes("keywords")){
      return  music.keywords.includes(searchValue.toLowerCase())
    }
    else{
      music.title.includes(searchValue.toLowerCase())
    }
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
   for(let i = 1; i <= Math.ceil(musicList.length/4); i++) {
        divs.push (<div onClick={()=> setCurrentPage(i)} className="page" key={i} >{i}</div>)
    }
    return divs;
 } 

  return (
    <div className="App">
    <Header search={search} addTofilter={addTofilter}/>
    <div className="FriendsListSection">
    {
      musicList.filter((music)=>  music.title.toLowerCase().includes(searchValue.toLowerCase()))
      // .sort((a, b) => (a.favourite < b.favourite) * 2 - 1)
      .slice(indexOfFirstFriend, indexOfLastFriend)
      .map((music, index)=>
         <MusicList id={index} key={"music"+index} title={music.title} keywords={music.keywords} description={music.description} data={music}  />
      ) 
    }

    </div>
    {
      musicList.length>4 && searchValue=="" ? (  <div className="pagination">{displayPage()} </div> ) : null
    }
  

    </div>
  );
}

export default App;
