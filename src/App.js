import React,{useState, useEffect  } from "react";
import './App.css';
import CardList from './components/card-list/card-list.component';
 import SearchBox from './components/search-box/search-box.component';

 const App = ()=>{
  const [monsters, setMonsters]= useState([]);
  const [searchString, setSearchString]= useState('');
  const[filteredMonster, setFilteredMonster]= useState(monsters);
  console.log('render');
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((users) =>
          setMonsters(users)
        )
  },[])

  useEffect(()=>{
    const filteredMonster= monsters.filter((monster)=>{
             return monster.name.toLocaleLowerCase().includes(searchString)
          });
          setFilteredMonster(filteredMonster)
  },[monsters, searchString])

  const onSearchchange=(event)=>{
       const searchString= event.target.value.toLocaleLowerCase();
       setSearchString(searchString);
     }
  return(
    <div className='App'>
            <h1 className='app-title'>Monster Rolodex</h1>
             <SearchBox classname="monster-search-box" placeholder="search monster" onHandlesearch={onSearchchange}></SearchBox>
             <CardList monsters={filteredMonster}></CardList>
           </div>
  )
 }

export default App;

// import React from 'react';
// import './App.css';
// import CardList from './components/card-list/card-list.component';
// import SearchBox from './components/search-box/search-box.component';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       monsters: [],
//       searchString:''
//     }
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => { 
//           return { monsters: users } 
//         },()=>{
//           console.log(this.state)
//         }
//       ))
//   }
// onSearchchange=(event)=>{
//   const searchString= event.target.value.toLocaleLowerCase();
// this.setState(()=>{return {searchString}})
// }
//   render() {
//     const {monsters, searchString}= this.state;
//     const {onSearchchange}= this;
//     const filteredMonster= monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchString)
//     })
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox classname="monster-search-box" placeholder="search monster" onHandlesearch={onSearchchange}></SearchBox>
//         <CardList monsters={filteredMonster}></CardList>
//       </div>
//     )
//   }

// }

