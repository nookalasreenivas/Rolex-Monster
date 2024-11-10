import { Component } from "react";
import './search-box.styles.css';

const SearchBox = ({classname, placeholder, onHandlesearch})=> {
   
        return(
            <input type='search' className={`search-box ${classname}`}
            placeholder={placeholder} 
            onChange={onHandlesearch} />
        )
    }

export default SearchBox