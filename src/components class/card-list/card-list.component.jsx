import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card-list.component";
class CardList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {monsters}=this.props;
        return(
            <div className="card-list">
                {monsters.map((monster)=>{
                    return(
                        <Card monster={monster}></Card>
                    )
                })}
            </div>
        )
    }
}

export default CardList;