import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <input type='search' className={`search-box ${this.props.classname}`}
            placeholder={this.props.placeholder} 
            onChange={this.props.onHandlesearch} />
        )
    }
}

export default SearchBox